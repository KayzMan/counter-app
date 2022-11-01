const display = document.querySelector('.counter-preview')
const allBtns = document.querySelector('#allBtns')

allBtns.addEventListener('click', counter)

function counter(e)
{
    const btn = e.target.id
    if(btn === 'increment')
        increment()
    else if(btn === 'decrement')
        decrement()
    else if(btn === 'reset')
        reset()
}

let value = 0

increment = () => { value += 1; display.textContent = value }
reset = () => { value = 0; display.textContent = value }
decrement = () => { value -= 1; display.textContent = value }