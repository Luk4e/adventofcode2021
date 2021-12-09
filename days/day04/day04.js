
fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day04input.txt','utf8');
    let lines = data.split(/\r?\n\n/);
    let numbersBingo = lines[0];
    numbersBingo = numbersBingo.split(',').map(x => parseInt(x));
    let boardsArrayWithTransponse = new Array();
    let boardsArray = new Array();
    for(let i = 1;i<lines.length;i++){
        let tempArr = new Array();
        for(boardLin of lines[i].split(/\r?\n/)){
            //tempArr.concat(boardLin.split(" ").map(x => parseInt(x)).filter(x => !Number.isNaN((x))));
            tempArr.push(boardLin.split(" ").map(x => parseInt(x)).filter(x => !Number.isNaN((x))));
        }
        boardsArray.push(tempArr)
        boardsArrayWithTransponse.push(tempArr.concat(tempArr[0].map((_,index) => tempArr.map(row => row[index]))))
    }
    
    let control = true;
    let boardSelect;
    let winningNuber;
    for(number of numbersBingo){
        for(board in boardsArrayWithTransponse){
            for(line of boardsArrayWithTransponse[board]){
                if(!control){
                    break
                }
                if(line.includes(number) && control){
                    line.splice(line.indexOf(number),1)
                    if(line.length===0){
                        winningNuber = number;
                        boardSelect= board;
                        control = false;
                        break
                    }
                }
            }
        }
        
    }
    let ris = 0;
    for(let i = 0;i<5;i++){
        if(boardsArrayWithTransponse[boardSelect][i].length!=0){
            ris += boardsArrayWithTransponse[boardSelect][i].reduce((prev,curr)=>prev+curr)
        }
    }

    console.log(ris*winningNuber)
     



}catch(err){
    console.log(err);
}
