function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

window.addEventListener('keydown', function(e){
    if((isLetter(e.key) || !isNaN(e.key)) && e.key != 'Backspace' && e.key != "Enter"){
        document.getElementById('currentTxtInput').innerHTML = document.getElementById('currentTxtInput').innerHTML + e.key;
    }else if(e.key == "Backspace"){
        document.getElementById('currentTxtInput').innerHTML = document.getElementById('currentTxtInput').innerHTML.slice(0, -1)
    }
})