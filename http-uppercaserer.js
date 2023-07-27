var http = require('http');
var fs=require('fs');
var port=process.argv[2];
const map=require('through2-map');
http.createServer(function(req,res){
       console.log(req.body);
       req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
       })).pipe(res);
}).listen(port);