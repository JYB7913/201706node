let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let listener = (req,res) =>{
    let {query,pathname} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    else {
        if(fs.existsSync(`.${pathname}`)){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream(`.${pathname}`).pipe(res);
        }else{
            res.statusCode = 404;
            res.end();
        }
    }
};
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});