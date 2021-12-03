fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day02input.txt','utf8');
    let lines = data.split(/\r?\n/);
    let horizontal = 0;
    let depth = 0;

    for(line of lines){
        let splitLines = line.split(/\s/);
        if(splitLines[0].match(/forward/)){
            horizontal+=parseInt(splitLines[1]);
        }else if(splitLines[0].match(/down/)){
            depth += parseInt(splitLines[1]);
        }else if(splitLines[0].match(/up/)){
            depth -= parseInt(splitLines[1]);
        }
    }

    
    console.log(horizontal*depth)

}catch(err){
    console.log(err);
}
