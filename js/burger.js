const menuElem = document.querySelector('.menu')
const humburgerElem = document.querySelector('.humburger-menu')

const handlerMenu = event => {
    const target = event.target
    const parent = target.closest('.menu')
    if ((!parent && target !== humburgerElem) || target.classList.contains('menu-list__link')) {
        toggleMenu()
    }
}

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    humburgerElem.classList.toggle('humburger-menu-active')

    if (menuElem.classList.contains('menu-active')) {
        document.body.addEventListener('click', handlerMenu)
    } else {
        document.body.removeEventListener('click', handlerMenu)
    }
}

humburgerElem.addEventListener('click', toggleMenu)