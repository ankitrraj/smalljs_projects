# the second project is -- bmi calculator

## the calculator is all about to calculate the bmi 


```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    // console.log(e);
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    console.log(height);
    
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);
    
    const result = document.querySelector('.result')

    if(height ===''||height<0||isNaN(height)){
        result.innerHTML = `enter the vaild height ${height}`

    }else if(height ===''||height<0||isNaN(height)){
        result.innerHTML = `enter the vaild height ${height}`

    }else{
        const bmi = (weight/(height**2/10000)).toFixed(3)

        result.innerHTML = `<span>${bmi}</span>`
    }

    
    
   
    
})




```