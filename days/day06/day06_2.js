
fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day06input.txt','utf8');
    let lines = data.split(/,/);
    let resultNum = 0;
    let initFish = initFishDic(lines);
    let result = fishDicDays(256,initFish);
    for(let i = 0;i<Object.keys(result).length;i++){
        resultNum += result[i];
    }
    
    console.log(resultNum)
}catch(err){
    console.log(err);
}


function initFishDic(initFish){
    let fishDic = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}
    for(elem of initFish){
        fishDic[parseInt(elem)] +=1;
    }
    return fishDic;
}


function fishDicDays(iter,initFish){
    let fishInit = initFish;
    for(let j = 0;j<iter;j++){
        let fishDicTemp = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}
        for(let i = 0; i<Object.keys(fishDicTemp).length;i++){
            if(i == 0){
                fishDicTemp[8] += fishInit[i];
                fishDicTemp[6] += fishInit[i];
    
            }else{
                fishDicTemp[i-1] += fishInit[i];
            }
        }
        fishInit = fishDicTemp;
    }
    return fishInit;
}