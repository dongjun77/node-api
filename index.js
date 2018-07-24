const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/'){//요청 객체
        res.statusCode = 200; //대답 코드
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n'); // response body
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('User list')
    } else {
        res.statusCode = 404;
        res.end('Not Found')
    }
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});