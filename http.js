const log = console.log;

const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("This is the home page");
	}
	if (req.url === "/about") {
		res.end("This is the about page");
	}
	res.end(`
        <h2>Page not found</h2>
        <a href='/'>Go home</a>
    `);
	// log(req.url);
	// res.write("Hello from server!");
	// res.end();
});
server.listen(5000);
