# digital clock -real time

## its a real digital time to using setinterval


```javascript
const clock = document.querySelector('#clock')


setInterval(function(){
    const date = new Date()
    
    
    clock.innerHTML = date.toLocaleTimeString();
    
    

    
} ,1000)

```