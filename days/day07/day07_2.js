
fs = require('fs');


const mean = arr =>{
    return Math.floor((arr.reduce((a,b)=>a+b))/arr.length);
}

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day07input.txt','utf8');
    let lines = data.split(/,/);
    lines = lines.map(x => parseInt(x));
    let meanArr = mean(lines);

    let fuel = 0;
    for(elem of lines){
        fuel += (Math.abs(elem-meanArr)*(Math.abs(elem-meanArr)+1))/2;
    }
   
    console.log(fuel)
}catch(err){
    console.log(err);
}

 