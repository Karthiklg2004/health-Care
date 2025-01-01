const IPFSUtil = require('./ipfsUtils');
require('dotenv').config();

async function main() {
    try {
        const filePath = process.argv[2];
        if (!filePath) {
            console.error('Debug: No file path provided');
            console.log(JSON.stringify({
                success: false,
                error: 'No file path provided'
            }));
            process.exit(1);
        }

        // Initialize IPFS utility and upload
        const ipfs = new IPFSUtil();
        const cid = await ipfs.uploadToIPFS(filePath);
        
        // Only output the JSON response, move debug logs to stderr
        console.error('Debug: Upload successful, CID:', cid);
        console.log(JSON.stringify({
            success: true,
            cid: cid,
            //url: `https://gateway.pinata.cloud/ipfs/${cid}`
        }));
        
    } catch (error) {
        console.error('Debug: Error occurred:', error);
        console.log(JSON.stringify({
            success: false,
            error: error.message || 'Unknown error occurred'
        }));
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Debug: Caught error in main:', error);
    console.log(JSON.stringify({
        success: false,
        error: 'Main error: ' + (error.message || 'Unknown error')
    }));
    process.exit(1);
}); 