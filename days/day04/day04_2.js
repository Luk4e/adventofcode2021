
fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day04input.txt','utf8');
    let lines = data.split(/\r?\n\n/);
    let numbersBingo = lines[0];
    numbersBingo = numbersBingo.split(',').map(x => parseInt(x));
    
    let boardsArrayWithTransponse = new Array();
    let boardsArray = new Array();
    let control = true;
    let setNumberDeleted = new Set();
    let listNuberUsed = new Array();
    let ris = 0;

    for(let i = 1;i<lines.length;i++){
        let tempArr = new Array();
        for(boardLin of lines[i].split(/\r?\n/)){
            //tempArr.concat(boardLin.split(" ").map(x => parseInt(x)).filter(x => !Number.isNaN((x))));
            tempArr.push(boardLin.split(" ").map(x => parseInt(x)).filter(x => !Number.isNaN((x))));
        }
        boardsArray.push(tempArr)
        boardsArrayWithTransponse.push(tempArr.concat(tempArr[0].map((_,index) => tempArr.map(row => row[index]))))
    }
    
    

    for(number of numbersBingo){
        for(board in boardsArrayWithTransponse){
            for(line of boardsArrayWithTransponse[board]){
                if(!control){
                    break
                }
                if(line.includes(number) && control){
                    line.splice(line.indexOf(number),1)
                    if(line.length===0){
                        setNumberDeleted.add(board)
                        listNuberUsed.push(number)
                        
                    }
                    if(setNumberDeleted.size === boardsArray.length){
                        control = false;
                        break
                    }
                    
                }
            }
        }
        
    }

    let selectedBoard = Array.from(setNumberDeleted).pop();
    for(let i = 0;i<5;i++){
        if(boardsArrayWithTransponse[selectedBoard][i].length!=0){
            ris += boardsArrayWithTransponse[selectedBoard][i].reduce((prev,curr)=>prev+curr)
        }
    }
    console.log(ris*listNuberUsed[listNuberUsed.length-1])
     



}catch(err){
    console.log(err);
}
