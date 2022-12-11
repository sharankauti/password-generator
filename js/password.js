var passwordPlace = document.querySelector('#passwordField');
var clickToGenerate = document.querySelector('#click');
var copyCode = document.querySelector('#copy');




clickToGenerate.addEventListener('click',function(e){
    e.preventDefault();
    var value =  Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    passwordPlace.setAttribute('value',value);
})
//The idea is to cast a random number (in the range 0..1) 
//to a base36 string (lowercase a-z plus 0-9) and remove the leading zero and decimal point.
passwordPlace.addEventListener('input',function(){
    if (true) {
        passwordPlace.value=''
    }
   
})




copyCode.addEventListener('click',function(){
    passwordPlace.select();
    document.execCommand("copy");
    alert(`copied password: ${passwordPlace.value}`)
})
