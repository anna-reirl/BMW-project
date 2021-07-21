const server = 'https://jsonplaceholder.typicode.com/posts'

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest()
    request.open('POST', server)

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText)
            callBack(response.id)
        } else {
            falseCallBack(request.status)
            throw new Error(request.status)
        }
    })

    request.send(data)

}

const dataTest = {
    name: 'Ivan',
    phone: '+9074958395'
}


const formsElems = document.querySelectorAll('.form')

const formHandler = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = {}

        for (const {
                name,
                value
            } of form.elements) {
            if (name) {
                data[name] = value
            }
        }
        sendData(JSON.stringify(data),
            (id) => {
                alert('Ваша заявка №' + id + '! \nВ ближайшее время с вами свяжемся.')
            },
            (err) => {
                alert('К сожалению технические неполадки, попробуйте отправить заявку позже. ' + err)
            })
    })
}

formsElems.forEach(formHandler)