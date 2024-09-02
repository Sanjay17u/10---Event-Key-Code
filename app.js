const form = document.querySelector('.container__form');
const addButton = document.querySelector('.button__add')
const removeButton = document.querySelector('.button__remove')

addButton.addEventListener('click', () => {
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.placeholder = "Another Field"
    newInput.classList.add('dynamic-input')
    
    
    form.appendChild(newInput)
})

removeButton.addEventListener('click', () => {
    const removeInput = document.querySelector('.dynamic-input:last-of-type');
    if(removeButton) {
        form.removeChild(removeInput);
    }
})
