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
                lowPoint.push([i,j])
            }

        }
    }

    let result = [];
    for(coord of lowPoint){
        let checkSet = new Set();
        let listElementsToCheck = [];
        checkSet.add(""+coord[0]+"-"+coord[1]);
        listElementsToCheck.push(coord);
        while(listElementsToCheck.length!==0){
            let current = listElementsToCheck.pop();
            let currentx = current[1];
            let currenty = current[0];

            let xRowSxC   = Math.max(0,currentx-1);
            let xRowDxC   = Math.min(width-1,currentx+1);
            let yColUpC   = Math.max(0,currenty-1)
            let yColDownC = Math.min(hight-1,currenty+1);
            
            for(let k = xRowSxC;k<=xRowDxC;k++){
                if(currentx!=k){
                    if(!checkSet.has(""+currenty+"-"+k) && matrix[currenty][k]!=9){
                        checkSet.add(""+currenty+"-"+k)
                        listElementsToCheck.push([currenty,k]);
                    }
                }
            }

            for(let l = yColUpC;l<=yColDownC;l++){
                if(currenty!=l){
                    if(!checkSet.has(""+l+"-"+currentx) &&  matrix[l][currentx]!=9){
                        checkSet.add(""+l+"-"+currentx)
                        listElementsToCheck.push([l,currentx]);
                    }
                }                
            }
            

        }

        result.push(checkSet.size)
    }
    result.sort((a,b)=>b-a)
    console.log(result[0]*result[1]*result[2])

    

    //[row][col]

}catch(err){
    console.log(err);
}

 