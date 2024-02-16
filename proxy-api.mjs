import http from 'http';

http.createServer((clientReq, clientRes) => {
	const proxy = http.request({
		hostname: 'localhost',
		port: 3000,
		path: clientReq.url,
		method: clientReq.method,
		headers: clientReq.headers
	}, (res) => {
		clientRes.writeHead(res.statusCode, res.headers);
		res.pipe(clientRes, { end: true });
	});

	clientReq.pipe(proxy, { end: true });
}).listen(3030);
