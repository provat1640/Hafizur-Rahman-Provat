const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const input = path.join(__dirname, '..', 'public', 'resume.txt');
const output = path.join(__dirname, '..', 'public', 'resume.pdf');

if (!fs.existsSync(input)) {
  console.error('resume.txt not found in public/. Create public/resume.txt first.');
  process.exit(1);
}

const text = fs.readFileSync(input, 'utf8');

const doc = new PDFDocument({ margin: 50 });
const stream = fs.createWriteStream(output);
doc.pipe(stream);

doc.fontSize(20).text('Resume', { align: 'center' });
doc.moveDown();
doc.fontSize(11).text(text, { align: 'left' });

doc.end();

stream.on('finish', () => {
  console.log('Generated', output);
});
