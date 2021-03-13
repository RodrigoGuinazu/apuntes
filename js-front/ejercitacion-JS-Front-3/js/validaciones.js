window.addEventListener ('load', function() {
    
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let regexNumber = /^[0-9]+$/g

    let qs = function (text) {
        return document.querySelector(text)
    }
    let qsa = function (text) {
        return document.querySelectorAll(text)
    }
    let fullNameInput = qs('#fullName')
    let nameError = qs('.fullName.invalid-feedback')

    let emailInput = qs('#email')
    let emailError = qs('.email.invalid-feedback')
    let email

    let phoneInput = qs('#phone')
    let phoneError = qs('.phone.invalid-feedback')
    let phone

    let passwordInput = qs('#password')
    let passwordError = qs('.password.invalid-feedback')

    let rePasswordInput = qs('#rePassword')
    let rePasswordError = qs('.rePassword.invalid-feedback')

    let countryInput = qs('#country')
    let countryError = qs('.country.invalid-feedback')


    fullNameInput.addEventListener('blur', function() {
        if(fullNameInput.value == "") {
            fullNameInput.classList.add('is-invalid')
            nameError.innerHTML = 'El campo debe estar completo'
        } else {
            fullNameInput.classList.remove('is-invalid')
        }
    })
    emailInput.addEventListener('blur', function() {
        email = regexEmail.test(emailInput.value)
        if(emailInput.value == "") {
            emailInput.classList.add('is-invalid')
            emailError.innerHTML = 'El campo debe estar completo'
        } else if(email == false) {
            emailInput.classList.add('is-invalid')
            emailError.innerHTML = 'El email ingresado no es correcto'
        } else {
            emailInput.classList.remove('is-invalid')
        }
    })
    phoneInput.addEventListener('blur', function() {
        phone = regexNumber.test(phoneInput.value)
        if(phoneInput.value == "") {
            phoneInput.classList.add('is-invalid')
            phoneError.innerHTML = 'El campo debe estar completo'
        } else if(phone) {
            phoneInput.classList.remove('is-invalid')
        }
        else {
            phoneInput.classList.add('is-invalid')
            phoneError.innerHTML = 'Este campo solo permite ingresar números'
        }
    })
    passwordInput.addEventListener('blur', function() {
        if(passwordInput.value == "") {
            passwordInput.classList.add('is-invalid')
            passwordError.innerHTML = 'El campo debe estar completo'
        } else if(passwordInput.value.length < 4) {
            passwordInput.classList.add('is-invalid')
            passwordError.innerHTML = 'La contraseña debe tener al menos 4 caracteres'
        } else {
            passwordInput.classList.remove('is-invalid')
        }
    })
    rePasswordInput.addEventListener('blur', function() {
        if(rePasswordInput.value == "") {
            rePasswordInput.classList.add('is-invalid')
            rePasswordError.innerHTML = 'El campo debe estar completo'
        } else if(rePasswordInput.value != passwordInput.value) {
            rePasswordInput.classList.add('is-invalid')
            rePasswordError.innerHTML = 'Las contraseñas deben ser iguales'
        } else {
            rePasswordInput.classList.remove('is-invalid')
        }
    })
    countryInput.addEventListener('blur', function() {
        if(countryInput.value == "") {
            countryInput.classList.add('is-invalid')
            countryError.innerHTML = 'El campo debe estar completo'
        } else {
            countryInput.classList.remove('is-invalid')
        }
    })



    let formSubmit = qs('.contact-form')
    formSubmit.addEventListener('submit', function (event) {
        
        i = 0
        if(countryInput.value == "") {
            countryInput.classList.add('is-invalid')
            countryError.innerHTML = 'El campo debe estar completo'
            i++
        }
        if(rePasswordInput.value != passwordInput.value) {
            rePasswordInput.classList.add('is-invalid')
            rePasswordError.innerHTML = 'Las contraseñas deben ser iguales'
            i++
        }
        if(passwordInput.value.length < 4) {
            passwordInput.classList.add('is-invalid')
            passwordError.innerHTML = 'La contraseña debe tener al menos 4 caracteres'
            i++
        }
        if(phone == false) {
            phoneInput.classList.add('is-invalid')
            phoneError.innerHTML = 'Este campo solo permite ingresar números'
            i++
        }
        if(email == false) {
            emailInput.classList.add('is-invalid')
            emailError.innerHTML = 'El email ingresado no es correcto'
            i++
        } 
        if(fullNameInput.value == "") {
            fullNameInput.classList.add('is-invalid')
            nameError.innerHTML = 'El campo debe estar completo'
            i++
        }

        if(i>0) {
            event.preventDefault()
        } else {
            event.preventDefault()
            let body = qs('body')
            body.innerHTML = `
            <div class = "form-submited">
                <h1>Gracias por registrarte</h1>
                <ul>
                    <li>Nombre y apellido: ${fullNameInput.value}</li>
                    <li>Email: ${emailInput.value}</li>
                    <li>Phone: ${phoneInput.value}</li>
                    <li>Country: ${countryInput.value}</li>
                </ul>
            </div>
            `
        }
    })
})