const http = require("http");
const port = 8080;
const host = "0.0.0.0"; // Listen on all network interfaces

const server = http.createServer((req, res) => {
  // Log the entire req object
  console.log("Request object:", req);

  // Log some useful parts separately
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Hello, world!</h1>
    <p>This is a test change to show the update works!</p>
  `);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
ptt
