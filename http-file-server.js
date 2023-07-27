var http=require('http');
var fs=require('fs');
var port=process.argv[2];
var file=process.argv[3];
const server=http.createServer(function(req,res){
    var stream=fs.createReadStream(file);
    stream.pipe(res);

}).listen(port);