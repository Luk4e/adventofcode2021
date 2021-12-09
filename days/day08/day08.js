fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day08input.txt','utf8');
    let lines = data.split(/\n/);
    let outputDigitArr = [];
    let inputSegArr = [];
    let outputDigitArrConc = [];
    for(line of lines){
        let divLine = line.split(/\s\|\s/);
        inputSegArr.push(divLine[0].split(/\s/));
        outputDigitArr.push(divLine[1].split(/\s/));
        outputDigitArrConc = outputDigitArrConc.concat(divLine[1].split(/\s/))
    }
    
    console.log(outputDigitArrConc.map(x => {
        if(x.length===2){
            return 1;//1
        }else if(x.length===3){
            return 1;//7
        }else if(x.length===4){
            return 1;//4
        }else if(x.length===7){
            return 1;//8
        }else{
            return 0;
        }
    }).reduce((prev,curr)=>prev+curr))

}catch(err){
    console.log(err);
}

 