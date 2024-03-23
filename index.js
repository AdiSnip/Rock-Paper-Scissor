let choices = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let winstatus = document.querySelector(".winstatus")
let uscore=document.querySelector("#userscore")
let cscore=document.querySelector("#compscore")
let compchoose = document.querySelector("#cchoose")
let userscore=0
let compscore=0
let comp=(userchoice)=>{
  let random=Math.floor(Math.random()*3);
  let compchoice;
  if (random<1){
    compchoice="rock";
    compchoose.innerText="Computer: Rock";
  }else if(random<2){
    compchoice="paper";
    compchoose.innerText="Computer: Paper";
  }else if(random<3){
    compchoice="scissor";
    compchoose.innerText="Computer: Scissor";
  }
  game(userchoice,compchoice)
}
let winner=(userwin,userchoice,compchoice)=>{
  if(userwin===true){
    winstatus.innerText="you win! "+ userchoice + " beats " + compchoice;
    winstatus.style.backgroundColor="lightgreen"
    winstatus.style.color="black"
    winstatus.style.fontSize="20px"
    userscore++;
    uscore.innerText=userscore;
  }else if(userwin===false){
    winstatus.innerText="you lose "+compchoice+" beats "+userchoice;
    winstatus.style.backgroundColor="red"
    winstatus.style.fontSize="20px"
    compscore++;
    cscore.innerText=compscore;
  }else if(userwin==="draw"){
    winstatus.innerText="Game Draw Play Again"
    winstatus.style.backgroundColor="black"
    winstatus.style.color="white"
    winstatus.style.fontSize="20px"
  }
}
let game=(userchoice,compchoice)=>{
  let userwin=true;
  if(userchoice===compchoice){
    userwin="draw";
  }else if(userchoice==="rock" && compchoice==="paper"){
    userwin=false
  }else if(userchoice==="paper" && compchoice==="scissor"){
    userwin=false
  }else if(userchoice==="scissor" && compchoice==="rock"){
    userwin=false
  }else if(userchoice==="rock" && compchoice==="scissor"){
    userwin=true
  }else if(userchoice==="paper" && compchoice==="rock"){
    userwin=true
  }else if(userchoice==="scissor" && compchoice==="paper"){
    userwin=true
  }
  winner(userwin,userchoice,compchoice);
};
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userchoice = choice.id;  // Get the ID of the clicked element
    comp(userchoice);
  });
});
