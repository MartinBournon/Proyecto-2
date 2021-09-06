class ControllerLogin extends Controller{
    constructor(){
        super();
        super.cargarUsuarios();
    }
    setListeners() {
        const btnIngresar = document.querySelector("#formLogin");
        btnIngresar.addEventListener("submit", (event) => {
            event.preventDefault();
            this.login();
        });
    }    
    login() {
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        super.getUsuarios().forEach(element => {
            if (element.username == username && element.password == password) {
                localStorage.setItem('usuarioLogueado', username);
            }
        });
    }
    mensajeAlerta(msg) {
        let form = document.querySelector("#formRegistrar");
        let p = document.createElement('p');
        p.textContent = msg;
        form.appendChild(p);
    }
}

let controllerLogin = new ControllerLogin();
controllerLogin.setListeners();
