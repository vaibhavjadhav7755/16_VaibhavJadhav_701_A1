const fs = require('fs').promises;

const fileOps = async () => {
  try {
    // 1. Write to a file
    await fs.writeFile('sample.txt', 'Hello from Node.js with async/await!');
    console.log('✅ File written.');

    // 2. Read the file
    const data = await fs.readFile('sample.txt', 'utf8');
    console.log('📄 File content:', data);

    // 3. Delete the file
    await fs.unlink('sample.txt');
    console.log('🗑️ File deleted.');
  } catch (err) {
    console.error('❌ Error:', err);
  }
};

fileOps();
