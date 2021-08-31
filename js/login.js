cargarUsuarios();
setListeners();
function setListeners() {
    let botonLogin = document.querySelector("#enviar");
    botonLogin.addEventListener("click", () => login(), false);
}

function login() {
    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;
    usuarios.forEach(element => {
        if (element.user == user && element.password == password) {
            localStorage.setItem('usuarioLogueado', user);
        }
    });
}