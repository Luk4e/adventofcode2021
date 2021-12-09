fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day09input.txt','utf8');
    let lines = data.split(/\n/);
    let hight = lines.length;
    let width = lines[0].length;
    let matrix = new Array();
    for(line of lines){
        matrix.push(line.split(""))
    }

    let lowPoint = [];

    for(let i = 0;i<hight;i++){
        for(let j = 0;j<width;j++){

            let xRowSx   = Math.max(0,j-1);
            let xRowDx   = Math.min(width-1,j+1);
            let yColUp   = Math.max(0,i-1)
            let yColDown = Math.min(hight-1,i+1);
            let neighbours = [];
            let checkLow = true;

            for(let k = xRowSx;k<=xRowDx;k++){
                if(j!=k){
                    neighbours.push(matrix[i][k])
                }
            }
            for(let l = yColUp;l<=yColDown;l++){
                if(i!=l){
                    neighbours.push(matrix[l][j])
                }                
            }   
            for(elem of neighbours){
                if(elem<=matrix[i][j]){
                    checkLow=false;
                }
            }
            if(checkLow){
                lowPoint.push(parseInt(matrix[i][j])+1)
            }

        }
    }

    console.log(lowPoint.reduce((cur,prev)=>cur+prev))

    

    //[row][col]

}catch(err){
    console.log(err);
}

 