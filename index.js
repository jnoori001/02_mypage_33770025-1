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
