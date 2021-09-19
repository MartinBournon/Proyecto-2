class ControllerLogin extends Controller {
    constructor() {
        super();
        // this.cargarUsuarios();
        console.log("hola");
        this.setListeners();
    }
    setListeners() {
        const btnIngresar = document.querySelector("#formLogin");
        const btnCerrar = document.querySelector("#btnCerrarLogin");
        btnIngresar.addEventListener("submit", (event) => {
            event.preventDefault();
            this.validarLogin();
        });
        btnCerrar.addEventListener('click', () => {
            this.limpiarVentana();
        });
    }
    validarLogin() {
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password');
        console.log("hola");
        this.delMsg();
        this.getUsuarios().find(element => {
            if (element.username === username &&
                element.password === password.value &&
                element.suspendido === false) {
                return this.login(element);
            } else {
                return this.addMsgAfter("Usuario o contraseña incorrectos", password);
            }
        });
    }
    login(username) {
        localStorage.setItem('usuarioLogueado', username);
        location.href = "comunidad.html";
    }
    limpiarVentana() {
        this.delMsg();
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
    }
}

let controllerLogin = new ControllerLogin();