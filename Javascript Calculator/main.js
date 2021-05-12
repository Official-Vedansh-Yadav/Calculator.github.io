let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text', buttonText);
        if (buttonText=='X') {
            buttonText = '*';
            screenValue += buttonText ;
            forms.answer.value = screenValue;
        } else if (buttonText == 'c') {
            screenValue = '';
            forms.answer.value = screenValue;
        } else if (buttonText == '=') {
            screenValue = eval(forms.answer.value) ;
            forms.answer.value = screenValue;
        } else{
            screenValue += buttonText;
            forms.answer.value = screenValue;
        }
    })
}