const fs=require('fs');
var buf=fs.readFileSync(process.argv[2]);
const str=buf.toString();
let str1=str.split('\n').length;
console.log(str1-1);