
fs = require('fs');

try{
    let data = fs.readFileSync('/home/luca/Documents/adventofcode2021/input_file/day05input.txt','utf8');
    let lines = data.split(/\r?\n/);
    let elementsList = new Array();
    
    for(line of lines){
        let xylines = line.split(/\s->\s/);
        let xy = xylines[0].trim().split(/,/)
        let xxyy = xylines[1].trim().split(/,/)
        let element= {
            x1:parseInt(xy[0]),
            y1:parseInt(xy[1]),
            x2:parseInt(xxyy[0]),
            y2:parseInt(xxyy[1])
        }   
        elementsList.push(element)
    }
    let countt = 0;
    let dictionaryElem = {};
    for(element of elementsList){
        let x;
        let y;
        if(element.y1>element.y2 && element.x1===element.x2){
            for(let i = 0;i<=(element.y1-element.y2);i++){
                x = element.x1;
                y = element.y2+i;
                dictionaryElem[""+x+"-"+y] !== undefined ? dictionaryElem[""+x+"-"+y]++ : dictionaryElem[""+x+"-"+y]=1;
            }
        }else if(element.y2>element.y1 && element.x1===element.x2){

            for(let i = 0;i<=(element.y2-element.y1);i++){
                x = element.x1;
                y = element.y1+i;
                dictionaryElem[""+x+"-"+y] !== undefined ? dictionaryElem[""+x+"-"+y]++ : dictionaryElem[""+x+"-"+y]=1;
            }
        }
        else if(element.x1>element.x2 && element.y1===element.y2){

            for(let i = 0;i<=(element.x1-element.x2);i++){
                x = element.x2+i;
                y = element.y1;
                dictionaryElem[""+x+"-"+y] !== undefined ? dictionaryElem[""+x+"-"+y]++ : dictionaryElem[""+x+"-"+y]=1;
            }
        }else if(element.x2>element.x1 && element.y1===element.y2){

            for(let i = 0 ;i<=(element.x2-element.x1);i++){ 
                x = element.x1+i;
                y = element.y1;
                dictionaryElem[""+x+"-"+y] !== undefined ? dictionaryElem[""+x+"-"+y]++ : dictionaryElem[""+x+"-"+y]=1;
            }
        }else if(element.x1===element.x2 && element.y1===element.y2){
            x = element.x1;
            y = element.y1;
            dictionaryElem[""+x+"-"+y] !== undefined ? dictionaryElem[""+x+"-"+y]++ : dictionaryElem[""+x+"-"+y]=1;
        } 
    }
    
    let count = 0;
    for(key in dictionaryElem){
        if(dictionaryElem[key]>1){
            count++
        }
    }

    console.log(count)

 }catch(err){
    console.log(err);
}
