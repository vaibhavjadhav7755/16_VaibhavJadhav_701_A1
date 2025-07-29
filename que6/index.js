const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

const filePath = 'demo.txt';

async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`✅ File '${filePath}' deleted successfully.`);
  } catch (err) {
    console.error(`❌ Error deleting file: ${err.message}`);
  }
}

deleteFile();