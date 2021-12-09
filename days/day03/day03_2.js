fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day03input.txt','utf8');
    let lines = data.split(/\r?\n/);
    
    console.log(searchOxigenOrCO2(lines,0,0,lines[0].length)*searchOxigenOrCO2(lines,0,1,lines[0].length))

}catch(err){
    console.log(err);
}


function searchOxigenOrCO2(data,i,minOrMax,dataLength){
    //data       = element to iterate
    //i          = position of the element to check
    //minOrMax   = flag to choose if calculate searching the max between 1 or 0 occurrences - 0 to search max (oxigen) 1 to search minimum (CO2)
    //dataLength = elements length - the function work if all the elements have the same length

    //Base case: Data has one element or I reach element's length 
    if(data.length===1 || i>=dataLength){
        if(i>=dataLength){
            console.log("Error: there is more than one element on the list")
        }else{
            return parseInt([data],2);
        }
    }else{
        //Here I use 2 list to list one for the zeros and one for the ones
        let zeros = [];
        let ones = [];
        for(line of data){
            if(line.length>dataLength){
                console.log("Error: one or more element have different length")
            }
            if(parseInt(line[i])===0){
                zeros.push(line);
            }else if(parseInt(line[i])===1){
                ones.push(line);
            }
        }
        //I check if I'm calculating the Oxigen or the CO2 (1 for oxigen and 0 for CO2)
        if(minOrMax===0){
            //Here I compare the list's length and I choose the correct one to apply recusion on it
            if(ones.length>=zeros.length){
                return searchOxigenOrCO2(ones,i+1,minOrMax,dataLength);
            }else{
                return searchOxigenOrCO2(zeros,i+1,minOrMax,dataLength);
            }
        }else if(minOrMax===1){
            if(zeros.length<=ones.length){
                return searchOxigenOrCO2(zeros,i+1,minOrMax,dataLength);
            }else{
                return searchOxigenOrCO2(ones,i+1,minOrMax,dataLength);
            }
        }
        
    }
}
  