fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day02input.txt','utf8');
    let lines = data.split(/\r?\n/);
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for(line of lines){
        let splitLines = line.split(/\s/);
        if(splitLines[0].match(/forward/)){
            horizontal+=parseInt(splitLines[1]);
            depth += aim*parseInt(splitLines[1]);
        }else if(splitLines[0].match(/down/)){
            aim += parseInt(splitLines[1]);
        }else if(splitLines[0].match(/up/)){
            aim -= parseInt(splitLines[1]);
        }

    }

    
    console.log(depth*horizontal)

}catch(err){
    console.log(err);
}

