let timer=60;
let score=0;
let rn=0;

let myValue=0;

function updateValueBasedOnScreenSize() {
    let width = window.innerWidth;
  if(width<=300){myValue=34}
    else if(width<=500){myValue=50}
        else if(width<=600){myValue=77}
            else if(width<=700){myValue=90}
                else{myValue=200}
  }


//function to make bubble
const bubbleMaker =()=>{
    let total="";
    updateValueBasedOnScreenSize();
for(let i=0;i<=myValue;i++){
    let a =Math.floor(Math.random()*10)
    total +=`<div id="bubble" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-600 hover:cursor-pointer flex items-center justify-center text-white">${a}</div>`
}
document.querySelector('#panelBottom').innerHTML =total;
}
//function to reduce time
const runTimer = () => {
    let timerinterval =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerBox').innerHTML = timer;}
            else{
                clearInterval(timer);
                document.querySelector('#panelBottom').innerHTML =`<h1>Game Over Final Score=${score}</h1>`;
            }
        },1000)}
        
 //score
const totalScore=()=>{
    score+= 10;
    document.querySelector('#scoreBox').innerHTML=score;
   }   
//hit
const newHit=()=>{
    rn = Math.floor(Math.random()*10);
    document.querySelector('#hitBox').textContent= rn;
    console.log(rn)
    return rn;
}
 let hit =newHit();
 document.querySelector('#panelBottom').addEventListener('click',function(dets){
    let clickedNum=Number(dets.target.innerHTML) 
    if(clickedNum===rn)
    {
        totalScore();
        bubbleMaker();
        newHit();
    }
     else
     newHit();
 });

//reset button
reset.addEventListener("click",()=>{
    score=0;
    timer=60;
    bubbleMaker();
    newHit();
})


// Rules
const showRulesButton = document.getElementById("showRulesButton");
const rulesModal = document.getElementById("rulesModal");
const close = document.getElementById("close");
const maingame=document.getElementById("main");

showRulesButton.addEventListener("click", () => {
    rulesModal.classList.remove("hidden");
    rulesModal.classList.add("flex"); // Show the modal
    maingame.classList.add("filter", "blur-md"); // Add a blur effect to the body
    showRulesButton.classList.add("hidden");
    reset.classList.add("hidden");
});

close.addEventListener("click", () => {
    rulesModal.classList.add("hidden"); // Hide the modal
    rulesModal.classList.remove("flex");
    maingame.classList.remove("filter", "blur-md"); // Remove the blur effect
    showRulesButton.classList.remove("hidden");
    reset.classList.remove("hidden");
});






updateValueBasedOnScreenSize();
newHit();
bubbleMaker();      
runTimer();

    