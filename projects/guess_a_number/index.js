let randomnum= parseInt(Math.random()*100 +1) /// when this you used tofixed in this place its return a string so comparison faills
console.log(randomnum); //genrate a number 1 to 100


const userinput = document.querySelector('#guessfield') // type field as input
const submit = document.querySelector('#subt')// its a only submit btn
const pregusses = document.querySelector('.gusses')  // this the the previous gusses the user guess the number
const remaingusses = document.querySelector('.gussesremain')// this use as token what tryes user have remain
const lowORhigh = document.querySelector('.lowORhigh')// this is only for trick to user gusses is low or high
const resultpars = document.querySelector('.resultpars') // result pars for the last result when we show 
const p = document.createElement('p')// this is exttra btn element for the to start game 

let previousgusses = [];// intalized  a array to store the user gusses
let gussesremain =1;// how much tryes he has remain

 let playgame= true;//this is the condition when user play game or not

 if (playgame) {
    submit.addEventListener('click' ,function (e){ //use submit btn and clcik

        e.preventDefault();  // it means value ko hold yahi rakho
        
        const gusses = parseInt(userinput.value)
        console.log(gusses);
        validatenumber(gusses);

    })
    
 }

function validatenumber(gusses){
    if(isNaN(gusses)){
        alert("enter a valid num");
    }else if(gusses <1){
        alert("enter a valid num high to 1");
    }else if(gusses >100){
        alert("enter a valid num low to 100");
    }else{
        // pregusses.append(gusses)
        if(gussesremain===11){
            displayguess(gusses)

            displaymessage(`game over .random number is ${randomnum}`)

        }else{
            displayguess(gusses)
            checkingnum(gusses)

        }

    }


 }

 function checkingnum(gusses){
    if (gusses === randomnum) {
        endgame(gusses)
        displaymessage(`you are win random num is ${randomnum}`)
        
    }else if(gusses<randomnum){
        displaymessage("number is too loow")

    }else if(gusses>randomnum){
        displaymessage("number is too high")

    }

 }

 function displayguess(gusses) {

    userinput.value =''
    pregusses.innerHTML += `${gusses}   ,`
    gussesremain++;
    remaingusses.innerHTML =`${11-gussesremain}`


    
 }
 function displaymessage(message){
    lowORhigh.innerHTML = `<h2>${message}</h2>`

 }

 function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');

     // FIXED
    p.innerHTML = `<button id="newGame">Start New Game</button>`; // FIXED
    resultpars.appendChild(p);

    playgame = false;
    newgame(); 
}



function newgame(){
    const newgamebtn =document.querySelector("#newGame")
    newgamebtn.addEventListener('click',function(e){
        randomnum= parseInt(Math.random()*100 +1)
         previousgusses = [];
        gussesremain =1;
        pregusses.innerHTML=''
        remaingusses.innerHTML =`${11-gussesremain}`
        userinput.removeAttribute('disabled')
        newgamebtn.parentElement.remove()







        playgame=true
    })
    


}
 