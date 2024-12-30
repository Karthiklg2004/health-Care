import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import sys
import json
import os

# Update privacy labels for Date of Birth
column_names = [
    'TEMPF', 'PULSE', 'RESPR', 'BPSYS', 'BPDIAS', 'POPCT', 'SCORE',
    'Pregnancies', 'Glucose', 'BloodPressure', 'Insulin', 'BMI',
    'DiabetesPedigreeFunction', 'Age', 'Smoker', 'Stroke', 'Sex', 'Alcohol',
    'Height', 'Weight', 'Bmi', 'BmiClass', 'Name', 'Phone',
    'Address', 'Date of Birth', 'Email', 'Adhar Number'
]

privacy_labels = [
    0, 0, 0, 0, 0, 0, 0,   # Public medical measurements
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,   # Private health indicators
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1  # Personal information (Date of Birth is now private)
]

def train_privacy_classifier(column_names, privacy_labels):
    """
    Train a Random Forest Classifier to predict column privacy
    """
    # Create training DataFrame
    df = pd.DataFrame({
        'column_name': column_names,
        'is_private': privacy_labels
    })
    
    # Prepare features and labels
    X = df['column_name'].values.reshape(-1, 1)
    y = df['is_private'].values
    
    # Label Encoder for column names
    encoder = LabelEncoder()
    X_encoded = encoder.fit_transform(X.ravel()).reshape(-1, 1)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X_encoded, y, test_size=0.2, random_state=42
    )
    
    # Train Random Forest Classifier
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)
    
    # Evaluate model
    y_pred = clf.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Privacy Classification Model Accuracy: {accuracy * 100:.2f}%")
    
    def predict_privacy(column_name):
        """
        Predict privacy status of a column with enforced rules.
        """
        # Rule-based classification for known columns
        always_private = ['Date of Birth', 'Name', 'Phone', 'Address', 'Email', 'Adhar Number']
        always_public = ['TEMPF', 'PULSE', 'RESPR', 'BPSYS', 'BPDIAS', 'POPCT', 'SCORE']
        
        if column_name in always_private:
            return "Private"
        elif column_name in always_public:
            return "Public"
        
        try:
            column_encoded = encoder.transform([column_name]).reshape(-1, 1)
            prediction = clf.predict(column_encoded)
            print(f"Debug: Column '{column_name}' encoded as {column_encoded.flatten()[0]}, Prediction: {prediction[0]}")
            return "Private" if prediction[0] == 1 else "Public"
        except ValueError as e:
            print(f"Error: {e}")
            return "Unknown"
    
    return predict_privacy, encoder, clf

def classify_healthcare_data(input_data, column_names, predict_privacy_func):
    """
    Classify input data into private and public categories.
    """
    # Add current timestamp
    current_time = pd.Timestamp.now().strftime('%Y-%m-%d %H:%M:%S')
    
    # Create DataFrame from input data
    input_df = pd.DataFrame([input_data], columns=column_names)
    
    # Initialize dictionaries for classified data
    private_data = []
    public_data = {}
    
    # Add timestamp to public data
    public_data['Created_At'] = [current_time]
    
    # Classify each column
    for column in input_df.columns:
        classification = predict_privacy_func(column)
        column_value = input_df[column].values[0]
        
        if classification == "Private":
            private_data.append((column, column_value))
        else:
            public_data[column] = [column_value]
    
    # Create DataFrames for private and public data
    private_df = pd.DataFrame(private_data, columns=['Feature', 'Data'])
    public_df = pd.DataFrame(public_data)
    
    # Add timestamp to private data
    private_df['Created_At'] = current_time
    
    # Create data directory if it doesn't exist
    data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')
    os.makedirs(data_dir, exist_ok=True)
    
    # Save to CSV files with timestamps
    timestamp = pd.Timestamp.now().strftime('%Y%m%d_%H%M%S')
    private_df.to_csv(os.path.join(data_dir, f'private_data_{timestamp}.csv'), index=False)
    public_df.to_csv(os.path.join(data_dir, f'public_data_{timestamp}.csv'), index=False)
    
    return private_df, public_df

def main():
    try:
        if len(sys.argv) > 1:
            input_data = json.loads(sys.argv[1])
            debug_mode = False
        else:
            print("No input provided, using sample data for testing...", file=sys.stderr)
            input_data = [
                100.9, 85, 18, 117, 75, 95, 1,
                3, 126, 88, 235, 39.3,
                0.704, 27, 0, 1, 0, 1,
                1.6, 57, 38.7109375, 'Obese Class 2',
                'Test Patient', '123-456-7890', '123 Test St', '1990-01-01', 'test@example.com', '1234-5678-9012'
            ]
            debug_mode = True

        predict_privacy, encoder, clf = train_privacy_classifier(column_names, privacy_labels)
        private_data, public_data = classify_healthcare_data(input_data, column_names, predict_privacy)
        
        # Send debug info to stderr
        if debug_mode:
            print("\n--- Private Data ---", file=sys.stderr)
            print(private_data, file=sys.stderr)
            print("\n--- Public Data ---", file=sys.stderr)
            print(public_data, file=sys.stderr)
            print("\nData successfully classified and saved to CSV files.", file=sys.stderr)
        
        # Only print JSON to stdout
        print(json.dumps({
            'private': private_data.to_dict('records'),
            'public': public_data.to_dict('records')[0]
        }))

    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    try:
        print("Script started", file=sys.stderr)
        if len(sys.argv) < 2:
            print("No input data provided", file=sys.stderr)
            sys.exit(1)
            
        print("Parsing input data", file=sys.stderr)
        input_data = json.loads(sys.argv[1])
        print(f"Received data: {input_data}", file=sys.stderr)
        
        main()
        print("Script completed successfully", file=sys.stderr)
        
    except Exception as e:
        print(f"Error in script: {str(e)}", file=sys.stderr)
        sys.exit(1)