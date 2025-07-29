const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// Input and output file paths
const inputFile = path.join(__dirname, 'sample.txt'); // Replace with your file
const outputFile = path.join(__dirname, 'sample.txt.gz');

// Create streams
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);
const gzip = zlib.createGzip();

// Pipe the read stream through gzip into the write stream
readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('✅ File successfully compressed using zlib ');
});
