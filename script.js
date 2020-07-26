var number=document.getElementsByClassName('number');
 var output=document.getElementById('output');
 var equal=document.getElementById('equal');
var clear=document.getElementById('clear');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        output.value= output.value + this.value;
    })
    equal.addEventListener('click', ()=>{
        output.value=eval(output.value)
    })
    clear.addEventListener('click', ()=>{
        output.value=null;
    })

    
}
