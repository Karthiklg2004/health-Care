const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

class IPFSUtil {
    constructor() {
        if (!process.env.PINATA_API_KEY || !process.env.PINATA_SECRET_API_KEY) {
            throw new Error('Pinata API keys not found in environment variables');
        }
        
        this.pinataApiKey = process.env.PINATA_API_KEY;
        this.pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
    }

    async uploadToIPFS(filePath) {
        try {
            const formData = new FormData();
            const file = fs.createReadStream(filePath);
            formData.append('file', file);

            console.log('Using API Key:', this.pinataApiKey);
            console.log('Using Secret Key:', this.pinataSecretApiKey.substring(0, 5) + '...');

            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    maxBodyLength: 'Infinity',
                    headers: {
                        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                        'pinata_api_key': this.pinataApiKey,
                        'pinata_secret_api_key': this.pinataSecretApiKey
                    }
                }
            );

            return response.data.IpfsHash;
        } catch (error) {
            console.error('Error uploading to IPFS:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
}

module.exports = IPFSUtil;