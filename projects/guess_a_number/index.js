const randomnum= parseInt(Math.random()*100 +1) /// when this you used tofixed in this place its return a string so comparison faills
console.log(randomnum);


const userinput = document.querySelector('#guessfield')
const submit = document.querySelector('#subt')
const pregusses = document.querySelector('.gusses')
const remaingusses = document.querySelector('.gussesremain')
const lowORhigh = document.querySelector('.lowORhigh')
const resultpars = document.querySelector('.resultpars')
const p = document.createElement('p')

let previousgusses = [];
let gussesremain =1;

 let playgame= true;

 if (playgame) {
    submit.addEventListener('click' ,function (e){
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
        pregusses.append(gusses)
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
    pregusses.innerHTML += `${gusses},`
    gussesremain++;
    remaingusses.innerHTML =`${11-gussesremain}`


    
 }
 function displaymessage(message){
    lowORhigh.innerHTML = `<h2>${message}</h2>`

 }

 function endgame(){
    // userinput.value=''
    // userinput.setAttribute('disabled','')
    // p.classList('button')
    // p.innerHTML = `<h2 id="newgame>start new game</h2>`
    // resultpars.appendChild(p)
    // endgame

 }


function newgame(){
    


}
 