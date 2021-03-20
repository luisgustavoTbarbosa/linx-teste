const buttons = document.querySelectorAll('.assignment button')
const assignments = document.querySelectorAll('.assignment')
const imagesButtons = document.querySelectorAll('.assignment img')

function removeassignment(indexButton) {
  assignments.forEach((assignment, index) => {
    if(index == indexButton){
      assignment.classList.add('complete')
      imagesButtons.forEach((image, index) => {
        if(index == indexButton){
          image.setAttribute('src', '../assets/check.svg')
        }
      })
    }
  })
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeassignment(index)
    button.innerText = "Concluido"
  })
})

