function shuffleCard(){
   var numValue= 1;
   
    imagarr =[]

    imagarr.push(document.getElementById('Nirvana'));
    imagarr.push(document.getElementById('Reiyu'));
    imagarr.push(document.getElementById('Rino'));
    imagarr.push(document.getElementById('Egg'));

    var indexValue = ["4","3","2","1"]
    var leftValue = ["500px"]

    var staticValue = numValue;
    if (staticValue == 4){
        staticValue = 0;
        numValue = 0;
    }

    var arr = []
    var count = 0

    while(true){
        x = Math.random()*4;
        y = x.toFixed();
        y = parseInt(y);

        if(!(arr.includes(y))&& y<=3){
            arr.push(y)
            count++
        }
        if(count == 4){
            break;

        }
    }
    for(i=0; i<4; i++){
        imagarr[i].style.zIndex = indexValue[arr[i]]
        imagarr[i].style.left = leftValue[i]
    }
}

