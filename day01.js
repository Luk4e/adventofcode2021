fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day01input.txt','utf8');
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

