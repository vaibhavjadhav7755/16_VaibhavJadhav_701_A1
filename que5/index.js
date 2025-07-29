const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const inputFile = path.join(__dirname, 'sample.txt.gz'); // Replace with your file
const outputFile = path.join(__dirname, 'sample.txt');

// Create streams
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);
const gzip = zlib.createGunzip();

// Pipe the read stream through gzip into the write stream
readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('✅ File successfully uncompressed using zlib ');
});