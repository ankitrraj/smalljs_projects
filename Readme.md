# 1 
 
# color changer

# first projects in javascript

## a color changer
```javascript
const selectbutton = document.querySelectorAll(".button")
const body = document.querySelector("body")


selectbutton.forEach(function (e){
    console.log(e)
    e.addEventListener( 'click',function (btn){
        console.log(btn);
        console.log(btn.target);
        if (btn.target.id ==="yellow") {
            body.style.backgroundColor = btn.target.id;
        
        }
        if (btn.target.id ==="red") {
            body.style.backgroundColor = btn.target.id;
        
        }
        if (btn.target.id ==="green") {
            body.style.backgroundColor = btn.target.id;
        
        }
        if (btn.target.id ==="blue") {
            body.style.backgroundColor = btn.target.id;
        
        }

   
        





    });
    

});


```

# this is the color change using events