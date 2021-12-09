
fs = require('fs');

const median = arr => {
    const mid = Math.floor(arr.length/2),nums = [...arr].sort((a,b)=>a-b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid-1] + nums[mid])/2;
}

const medianModify = arr => {
    const mid = Math.floor(arr.length/2),nums = [...arr].sort((a,b)=>a-b);
    return nums[mid];
}

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day07input.txt','utf8');
    let lines = data.split(/,/);
    lines = lines.map(x => parseInt(x));
    let arrayMedian = medianModify(lines);
    let fuel = 0;
    for(elem of lines){
        fuel += Math.abs(elem-arrayMedian);
    }
   
    console.log(fuel)
}catch(err){
    console.log(err);
}

 