const morelElem = document.querySelector('.more')
const modalElem = document.querySelector('.modal')

const openModal = () => {
    modalElem.classList.remove('hidden')
    disableScroll()
}

const closeModal = () => {
    modalElem.classList.add('hidden')
    enableScroll()
}

morelElem.addEventListener('click', openModal)
modalElem.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('overlay') || 
        target.classList.contains('modal__close')) {
            closeModal()
    }        
})
