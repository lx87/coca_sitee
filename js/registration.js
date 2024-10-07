const form = document.getElementById('reg_form');
const mail = document.getElementById('reg_mail');

const mailInput = document.getElementById('exampleInputEmail1');
const passInput = document.getElementById('exampleInputPassword1');
const regForm = document.getElementById('registration');

const mainLogin = document.getElementById('user_login');
const logForm = document.getElementById('loginForm');

const logEmail = document.getElementById('emailInput');
const logpass = document.getElementById('passwordInput');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let user_mail = mail.value;
        localStorage.setItem('email', user_mail);
        localStorage.setItem('show_reg', 'true');
        window.location.href = 'login.html';
    });
}

window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('show_reg') === 'true') {
        let savedEmail = localStorage.getItem('email');
        mailInput.value = savedEmail; 
        localStorage.removeItem('show_reg'); 
    }
});

if (regForm) {
    regForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let user_pass = passInput.value;
        localStorage.setItem('pass', user_pass);
        localStorage.setItem('show_modal', 'true');
        window.location.href = 'index.html';
    });
}

window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('show_modal') === 'true') {
        alert(`You have successfully registered, now you can log in!`);
        localStorage.removeItem('show_modal');
    }
});

if(logForm){
    const myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    logForm.addEventListener('submit', function(event){
        event.preventDefault()
        let savedEmail = localStorage.getItem('email');
        let savedPass = localStorage.getItem('pass'); 
        if(logpass.value === savedPass && logEmail.value === savedEmail){
            alert('SUCCESS')
            mainLogin.textContent = savedEmail;
            myModal.hide();
            mainLogin.removeAttribute('id')
            Array.from(mainLogin.attributes).forEach(attr => {
                if (attr.name.startsWith('data-')) {
                    mainLogin.removeAttribute(attr.name);
                }
            });
        } else{
            alert('password or mail are incorrect')
        }
    })
}
