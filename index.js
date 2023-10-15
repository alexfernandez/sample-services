import http from 'http'

const hostname = '127.0.0.1'
const port = 54391

const server = http.createServer((req, res) => {
	if (req.url == '/a') {
		const start = Date.now()
		while (Date.now() - start < 10) {
			// do nothing
		}
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/plain')
		res.end('Hello World')
	} else if (req.url == '/d') {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/plain')
		res.end('Hello World')
	} else {
		console.log(req.url)
		res.statusCode = 404
		res.setHeader('Content-Type', 'text/plain')
		res.end('Not found')
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})

