const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Normalize URL path to prevent directory traversal
  let safePath = req.url.split('?')[0];
  if (safePath === '/') {
    safePath = '/index.html';
  }

  const filePath = path.join(__dirname, safePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      const ext = path.extname(filePath);
      let contentType = 'text/html';
      
      if (ext === '.js') {
        contentType = 'text/javascript';
      } else if (ext === '.css') {
        contentType = 'text/css';
      } else if (ext === '.json') {
        contentType = 'application/json';
      } else if (ext === '.png') {
        contentType = 'image/png';
      } else if (ext === '.jpg' || ext === '.jpeg') {
        contentType = 'image/jpeg';
      } else if (ext === '.ico') {
        contentType = 'image/x-icon';
      } else if (ext === '.webp') {
        contentType = 'image/webp';
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`MUSA TRADERS running at http://localhost:${PORT}/`);
});
