fs = require('fs');

let check = (arr,target) => target.every(v => arr.includes(v));

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day08input.txt','utf8');
    let lines = data.split(/\n/);
    let outputDigitArr = [];
    let inputSegArr = [];
    let outputDigitArrConc = [];
    let result = 0
    for(line of lines){
        let divLine = line.split(/\s\|\s/);
        inputSegArr.push(divLine[0].split(/\s/));
        outputDigitArr.push(divLine[1].split(/\s/));
    }

    for(let i = 0;i<(inputSegArr.length);i++){
        let outputOne,outputTwo,outputThree,outputFour;
        let zero,one,two,three,four,five,six,seven,eight,nine;

        one = inputSegArr[i].filter(x => x.length===2);
        four = inputSegArr[i].filter(x => x.length===4)
        seven = inputSegArr[i].filter(x => x.length===3)
        eight = inputSegArr[i].filter(x => x.length===7)

        three = inputSegArr[i].filter(x => {
            if(x.length===5){
                return check(x.split(""),one[0].split(""))
            }
        })

        nine = inputSegArr[i].filter(x => {
            if(x.length===6){
                return check(x.split(""),three[0].split(""))
            }
        })
        fourMinusOne = four[0].split("").filter(x => {
            if(!one[0].split("").includes(x)){
                return true;
            }
        })

        five = inputSegArr[i].filter(x => {
            if(x.length===5){
                return check(x.split(""),fourMinusOne)
            }
        })

        two = inputSegArr[i].filter(x => {
            if(x.length===5 && x!=three && x!=five){
                return true
            }
        })

        zero = inputSegArr[i].filter(x => {
            if(x.length===6 && x!=nine){
                return check(x.split(""),one[0].split(""))
            }
        })
        six = inputSegArr[i].filter(x => {
            if(x.length===6 && x!=zero && x!=nine){
                return true
            }
        })
    
        zero = zero[0].split("").sort().join("");
        one = one[0].split("").sort().join("");
        two = two[0].split("").sort().join("");
        three = three[0].split("").sort().join("");
        four = four[0].split("").sort().join("");
        five = five[0].split("").sort().join("");
        six = six[0].split("").sort().join("");
        seven = seven[0].split("").sort().join("");
        eight = eight[0].split("").sort().join("");
        nine = nine[0].split("").sort().join("");
    
            
        let arrayTot = [zero,one,two,three,four,five,six,seven,eight,nine]

        outputOne = outputDigitArr[i][0].split("").sort().join("");
        outputTwo = outputDigitArr[i][1].split("").sort().join("");
        outputThree = outputDigitArr[i][2].split("").sort().join("");
        outputFour  = outputDigitArr[i][3].split("").sort().join("");

        //console.log(parseInt([arrayTot.indexOf(outputOne),arrayTot.indexOf(outputTwo),arrayTot.indexOf(outputThree),arrayTot.indexOf(outputFour)].join("")))

        
        result += parseInt([arrayTot.indexOf(outputOne),arrayTot.indexOf(outputTwo),arrayTot.indexOf(outputThree),arrayTot.indexOf(outputFour)].join(""))
    }

    //console.log(`zero: ${zero} one: ${one} two: ${two} three: ${three} four: ${four} five: ${five} six: ${six} seven: ${seven} eight:${eight} nine: ${nine}`)

    console.log(result)
}catch(err){
    console.log(err);
}

 