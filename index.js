var http= require('http'),
    fs = require('fs'); 

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
        if(err) {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain'});
                res.end('500 - Internal Error');
            } else {
                res.writeHead(responseCode, { 'Content-Type': contentType});
                res.end(data);
            }
        }
    });
}

http.createServer(function(req,res) {
        var path = req.url.replace(/\/?(?:\?.*)?$/, '')
            .toLowerCase();
        
        switch (path) {
            case '/':
                // code
                serveStaticFile(res, '/public/home.html', 'text/html');
                // res.writeHead(200, {'Content-Type': 'text/plain'});
                // res.end('Home page');
                break;
            
            case '/about':
                // code
                serveStaticFile(res, '/public/about.html', 'text/html');
                // res.writeHead(200, {'Content-Type': 'text/plain'});
                // res.end('About page');
                break;
            
            case '/img/logo.jpg':
                // code
                serveStaticFile(res, '/public/img/logo.jpg', 'text/jpeg');
                // res.writeHead(404, {'Content-Type': 'text/plain'});
                // res.end('Not found');
                break;
            
            default:
                // code
                serveStaticFile(res, '/public/404.html', 'text/html');
                // res.writeHead(404, {'Content-Type': 'text/plain'});
                // res.end('Not found');
                break;
        }
    }).listen(process.env.PORT);
console.log("Server started on localhost; press CTRL-C to terminate");



