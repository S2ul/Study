var ai;
ai = Math.floor(Math.random() * 3) +1;

switch(ai){
    case 1: 
    ai = "rock"
    break;

    case 2: 
    ai = "scissor"
    break;

    case 3: 
    ai = "paper"
    break;
    }

var me = prompt("가위 or 바위 or 보");

switch(me){
    case "바위": 
    if(ai == "rock"){
        document.write("바위 vs 바위"+"<br>"+"비겼네요!")
    } else if (ai == "scissor"){
        document.write("바위 vs 가위"+"<br>"+"이겼네요!")
    } else if(ai == "paper"){
        document.write("바위 vs 보"+"<br>"+"졌네요!")
    }
    break;

    case "가위": 
    if(ai == "rock"){
        document.write("가위 vs 바위"+"<br>"+"졌네요!")
    } else if (ai == "scissor"){
        document.write("가위 vs 가위"+"<br>"+"비겼네요!")
    } else if(ai == "paper"){
        document.write("가위 vs 보"+"<br>"+"이겼네요!")
    }
    break;

    case "보": 
    if(ai == "rock"){
        document.write("보 vs 바위"+"<br>"+"이겼네요!")
    } else if (ai == "scissor"){
        document.write("보 vs 가위"+"<br>"+"졌네요!")
    } else if(ai == "paper"){
        document.write("보 vs 보"+"<br>"+"비겼네요!")
    }
    break;

default :{
    alert("선택 할 수 없는 항목입니다.")
    break;
}}