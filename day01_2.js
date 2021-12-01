fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/file_to_read/day01_2input.txt','utf8');
    const lines = data.split(/\r?\n/);
    
    console.log(countIncrise(lines))
}catch(err){
    console.log(err);
}



function countIncrise(arr){
    let count = 0;
    for(let i = 0;i<(arr.length-3);i++){
        let firts = parseInt(arr[i])+parseInt(arr[i+1])+parseInt(arr[i+2])
        let second = parseInt(arr[i+1])+parseInt(arr[i+2])+parseInt(arr[i+3])
        if(second>firts){
            count++;
        }
    }
    return count;
}