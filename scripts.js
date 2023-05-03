const MAX_NUMBER = 20
const MIN_NUMBER = -10



const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
     const newValue = parseInt(number.value) - 1
     number.value = newValue

     if (add.disabled === true) {
        add.disabled = false
     }

     if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
     } 
        
     
}
const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }
        
    }

    if (newValue >= MAX_NUMBER) {
        add.dsabled = true

    }
    


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)