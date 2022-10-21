let box = document.querySelectorAll(".box");
let turn = 1; //1 for circle, 0 for cross

let clickCount = 0;

let boxes = {b1:"", b2:"", b3:"", b4:"", b5:"", b6:"", b7:"", b8:"", b9:""};

let winCondition = [
    ["b1", "b2", "b3"], ["b4", "b5", "b6"], ["b7", "b8", "b9"],
    ["b1", "b4", "b7"], ["b2", "b5", "b8"], ["b3", "b6", "b9"],
    ["b1", "b5", "b9"], ["b3", "b5", "b7"]
];

let gameOver = false;

function winCheck(){
    winCondition.forEach(function(cnd){   
        if((boxes[cnd[0]] === boxes[cnd[1]]) && boxes[cnd[0]] != ""){
            if(boxes[cnd[1]] === boxes[cnd[2]]){
                if(boxes[cnd[0]] === 2){
                    document.querySelector("h1").innerText = "x WINS!";
                    gameOver = true;
                } else if(boxes[cnd[0]] === 1){
                    document.querySelector("h1").innerText = "o WINS!";
                    gameOver = true;
                } 
            }
        }
    });

    if(clickCount == 9){
        if(gameOver == false){
            document.querySelector("h1").innerText = "MATCH DRAWN!";
        }
    }
}

box.forEach(function(oneBox){
    oneBox.onclick = function(){
        if(oneBox.innerHTML != ""){
            alert("Already marked");
        } else {
            if(turn == 1){
                oneBox.innerHTML = "<p>o</p>";
                boxes[oneBox.classList[1]] = 1;
                turn = 0;
                console.log(boxes);
                clickCount++;
            } else {
                oneBox.innerHTML = "<p>x</p>";
                boxes[oneBox.classList[1]] = 2;
                turn = 1;
                console.log(boxes);
                clickCount++;
            }
        }
        // console.log(oneBox.classList[1]);
        winCheck();   
    };
});

