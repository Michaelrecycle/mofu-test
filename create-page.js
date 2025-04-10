/**
 * Simple script to create a new HTML page for testing
 * Usage: node create-page.js <title> <filename>
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node create-page.js <title> <filename>');
  process.exit(1);
}

const title = args[0];
const filename = args[1].endsWith('.html') ? args[1] : `${args[1]}.html`;

// Ensure the pages directory exists
const pagesDir = path.join(__dirname, 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Create HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <p>This is a test page created on ${new Date().toLocaleDateString()}.</p>
    <p><a href="../index.html">Return to homepage</a></p>
</body>
</html>`;

// Write the file
const filePath = path.join(pagesDir, filename);
fs.writeFileSync(filePath, htmlContent);

console.log(`Page created successfully: ${filePath}`);
console.log('After pushing to GitHub, the GitHub Action will update the sitemap automatically.'); 