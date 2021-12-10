fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day10input.txt','utf8');
    let lines = data.split(/\n/);

    let dict = new Set(["[","{","(","<"]);
    let stack = [];
    let sortedScore = [];
    let lookup = {
        "[":"]",
        "{":"}",
        "(":")",
        "<":">"
    }
    
    let lookupV = {
        "]":2,
        "}":3,
        ")":1, 
        ">":4
    }
    for(line of lines){
        let par = line.split("");
        for(p of par){
            if(dict.has(p)){
                stack.push(lookup[p])
            }else{
                if(p!==stack[stack.length-1]){
                    stack = [];
                    break;
                }else{
                    stack.pop()
                }
            }
        }
        if(stack.length!==0){
            let count = 0;
            while(stack.length!==0){
                count = count*5+lookupV[stack.pop()]
            }           
            sortedScore.push(count)
        }

    }

    console.log(sortedScore.sort((a,b)=>a-b)[Math.floor(sortedScore.length/2)])

}catch(err){
    console.log(err);
}

 