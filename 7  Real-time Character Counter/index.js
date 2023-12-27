const textareaE = document.getElementById('textarea');
const totalCounterE = document.getElementById('total-counter');
const remainingCounterE = document.getElementById('remaining-counter');

textareaE.addEventListener('keyup', ()=> {
    console.log('key')
    updateCounter()
});

function updateCounter() {
    totalCounterE.innerText = textareaE.value.length; 
    remainingCounterE.innerText = textareaE.getAttribute('maxLength') - textareaE.value.length; 
}