import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    console.log('Received form data:', formData); // Debug log

    const orderedData = [
      parseFloat(formData.TEMPF) || 0,
      parseFloat(formData.PULSE) || 0,
      parseFloat(formData.RESPR) || 0,
      parseFloat(formData.BPSYS) || 0,
      parseFloat(formData.BPDIAS) || 0,
      parseFloat(formData.POPCT) || 0,
      1, // SCORE default
      parseFloat(formData.Pregnancies) || 0,
      parseFloat(formData.Glucose) || 0,
      parseFloat(formData.BloodPressure) || 0,
      parseFloat(formData.Insulin) || 0,
      parseFloat(formData.BMI) || 0,
      parseFloat(formData.DiabetesPedigreeFunction) || 0,
      parseFloat(formData.Age) || 0,
      formData.Smoker === 'yes' ? 1 : 0,
      formData.Stroke === 'yes' ? 1 : 0,
      formData.gender === 'male' ? 1 : 0,
      formData.Alcohol === 'yes' ? 1 : 0,
      parseFloat(formData.Height) || 0,
      parseFloat(formData.Weight) || 0,
      parseFloat(formData.Bmi) || 0,
      formData.BmiClass || '',
      formData.name || '',
      formData.phone || '',
      formData.address || '',
      formData.dob || '',
      formData.email || '',
      formData.aadhar || ''
    ];

    console.log('Ordered data:', orderedData); // Debug log

    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', [
        path.join(process.cwd(), 'scripts', 'classify_data.py'),
        JSON.stringify(orderedData)
      ]);

      let stdoutData = '';
      let stderrData = '';

      pythonProcess.stdout.on('data', (data) => {
        stdoutData += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        stderrData += data.toString();
        console.error('Python error:', data.toString()); // Debug log
      });

      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(NextResponse.json({ 
            success: true, 
            message: 'Data classified successfully',
            stdout: stdoutData
          }));
        } else {
          resolve(NextResponse.json({ 
            success: false, 
            error: `Process exited with code ${code}`,
            stderr: stderrData
          }, { status: 500 }));
        }
      });
    });

  } catch (error) {
    console.error('Classification error:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
} 