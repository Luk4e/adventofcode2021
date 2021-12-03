fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day03input.txt','utf8');
    let lines = data.split(/\r?\n/);
    let result=  "";
    let resultOp=  "";
    for(let i = 0;i<lines[0].length;i++){
        let zeros = 0;
        let ones = 0;
        
        for(line of lines){
            if(parseInt(line[i])===0){
                zeros++;
            }else{
                ones++;
            }
        }
        if(zeros>ones){
            result+='0'
            resultOp+='1'
        }else{
            result+='1';
            resultOp+='0'
        }
    }
    console.log(parseInt(resultOp,2)*parseInt(result,2))

}catch(err){
    console.log(err);
}
