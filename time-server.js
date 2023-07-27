var net=require('net');
var port=process.argv[2];
function zeroPad(number){
    if(number<10)
    {
        return '0'+number;
    }
    return number;
}
const server=net.createServer(function(socket){
    var date=new Date();
    var year=date.getFullYear();
    var mon=zeroPad(date.getMonth()+1);
    var day= zeroPad(date.getDate());
    var hour= zeroPad(date.getHours());
    var minute= zeroPad(date.getMinutes());
    var dateString = year + '-' + mon + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    
    socket.end(dateString + '\n');
}).listen(port);