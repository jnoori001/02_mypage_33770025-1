 HEAD
const http = require("http");

const port = 8000;

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <meta charset="UTF-8" />
</head>
<body>
  <h1>Hello, I am Jamshed</h1>
  <h2>I am a computer science student</h2>
  <p>This is a simple web page served using Node.js!</p>
</body>
</html>
`;

http.createServer(function(req, res) {
  console.log(req);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlContent);
}).listen(port, function() {
  console.log(`Server running at http://localhost:${port}/`);
});
// This is a small change for testing

const http = require("http");

const port = 8000;

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <meta charset="UTF-8" />
</head>
<body>
  <h1>Hello, I am Jamshed</h1>
  <h2>I am a computer science student</h2>
  <p>This is a simple web page served using Node.js!</p>
</body>
</html>
`;

http.createServer(function(req, res) {
  console.log(req);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlContent);
}).listen(port, function() {
  console.log(`Server running at http://localhost:${port}/`);
});
0f7690cc9057ae2454d881c354d37db8930bbe86
