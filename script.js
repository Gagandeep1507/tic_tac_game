let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#Reset");
let msgcont = document.querySelector(".msg");
let winmsg = document.querySelector("#win");
let tic = document.querySelector(".tic");
let turn0 = true;
const winningptr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,7],[1,5,7],[2,5,8],[0,4,8]];



boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = 'O'
            turn0 = false;
        }
        else{
            box.innerText = 'X'
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const disabledbtn = ()=>{
    for(let i of boxes){
        i.disabled = true;
    }

}
const enablebox = ()=>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = "";
    }

}
const restart = () =>{
    console.log("click")
    turn0 = true;
    enablebox();
    msgcont.classList.add("hide");
    tic.classList.remove("hide");

}


const showinner = ()=> {
    winmsg.innerText = 'Congratulattiions, you are the ultimate WINNER';
    winmsg.classList.remove("hide");
    tic.classList.add("hide");
    disabledbtn();
}

const checkwinner = () => {
    for(let pattern of winningptr){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner")
                showinner()
            }
        }
    }
}

Resetbtn.addEventListener("click", restart);