setInterval(()=> {
    var timeNow = new Date()
  
    updateTime = timeNow.getHours() + ":" + timeNow.getMinutes();
  
    var time =document.querySelector('#uptade-time')
    time.innerHTML = updateTime;
}, "2000")

function eraseResult() {
    document.getElementById('result').innerHTML = "";
}

function backspaceKey() {
    var keys = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = keys.substring(0, keys.length -1);
}

function addNumber(key) {
    var keys = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = keys + key;
}

function porcentageKey() {
    var keys = document.getElementById('result').innerHTML;
    var porcentage = eval (keys) / 100;
    document.getElementById('result').innerHTML = porcentage;
}

function calculateResult() {
    var keys = document.getElementById('result').innerHTML;
    
    try {
        document.getElementById('result').innerHTML = eval(keys);
    } catch(err) { 
        console.log(err);
    }
}
