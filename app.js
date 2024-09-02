const container = document.querySelector('.insert')

const keyPressedDiv = document.createElement('div')
const keyCodeDiv = document.createElement('div')
const keyDivCode = document.createElement('div')

keyPressedDiv.classList.add('dynamicDiv')
keyCodeDiv.classList.add('dynamicDiv')
keyDivCode.classList.add('dynamicDiv')

container.append(keyPressedDiv)
container.append(keyCodeDiv)
container.append(keyDivCode)

document.addEventListener('keydown', (event) => {
    keyPressedDiv.innerHTML = `Key : ${event.key}`
    keyCodeDiv.innerHTML = `Key Code : ${event.keyCode}`
    keyDivCode.innerHTML = `Key Code : ${event.code}`
})
