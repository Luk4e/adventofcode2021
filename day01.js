const { count } = require('console');
const { POINT_CONVERSION_UNCOMPRESSED } = require('constants');

fs = require('fs');
let data;

try{
    data = fs.readFileSync('/home/luca/Documents/adventofcode2021/file_to_read/day01input.txt','utf8');
    const lines = data.split(/\r?\n/);
    let count = 0;
    lines.reduce((prev,curr)=>{
        if(parseInt(prev)<parseInt(curr)){
            count++;
        }
        return curr
    })
    
    console.log(count)
}catch(err){
    console.log(err);
}

