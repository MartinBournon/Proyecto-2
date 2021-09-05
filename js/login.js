cargarUsuarios();
setListeners();

function setListeners() {
    const btnIngresar = document.querySelector("#formLogin");
    const btnRegistrar = document.querySelector("#formRegistrar");
    btnIngresar.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    });
    btnRegistrar.addEventListener("submit", (event) => {
        event.preventDefault();
        validarRegistro();
    });
}

function login() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    usuarios.forEach(element => {
        if (element.username == username && element.password == password) {
            localStorage.setItem('usuarioLogueado', username);
        }
    });
}

function validarRegistro() {
    const regExpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
    const regExpUsername = /[a-z][A-Z]\d{5,16}/;
    let username = document.querySelector("#usernameReg").value;
    let password = document.querySelector("#passwordReg").value;
    let password2 = document.querySelector("#passwordReg2").value;
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;

    if (username == '' || username.length == 0) {
        let p = document.createElement('p');
        let input = document.querySelector("#usernameReg");
        p.textContent = "Username can't be empty";
        input.after(p);
    } else if (!regExpUsername.test(username)) {
        let p = document.createElement('p');
        let input = document.querySelector("#usernameReg");
        p.textContent = "Username must be between 5 and 16 characters," +
            "can contain uppercase, lowercase and numbers";
        input.after(p);
    }
    if (!regExpPassword.test(password) && password != password2) {
        let p = document.createElement('p');
        let input = document.querySelector("#passwordReg");
        p.textContent = "Both password must be the same and must " +
            "have unless one uppercase, one lowercase and one number";
        input.after(p);
    }


}

function registrar() {
    let usuario = new Usuario(username, password, nombre, email);
    usuarios.push(usuario);
    actualizarUsuarios();
}

function alertaUsername(msg) {
    let form = document.querySelector("#formRegistrar");
    let p = document.createElement('p');
    p.textContent = msg;
    form.appendChild(p);
}