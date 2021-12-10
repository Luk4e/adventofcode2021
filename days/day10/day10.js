fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day10input.txt','utf8');
    let lines = data.split(/\n/);

    let dict = new Set(["[","{","(","<"]);

    let lookup = {
        "[":"]","{":"}","(":")","<":">"
    }
    
    let lookupV = {
        "]":57,"}":1197,")":3, ">":25137
    }

    let stack = [];
    let count = 0;

    for(line of lines){
        let par = line.split("");
        for(p of par){
            if(dict.has(p)){
                stack.push(lookup[p])
            }else{
                if(p!==stack[stack.length-1]){
                    count += lookupV[p];
                    break;
                }else{
                    stack.pop()
                }
            }
        }
    }

    console.log(count)

}catch(err){
    console.log(err);
}

 