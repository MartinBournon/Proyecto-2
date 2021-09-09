class ControllerLogin extends Controller {
    constructor() {
        super();
        super.cargarUsuarios();
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
        super.delMsg();
        super.getUsuarios().find(element => {
            if (element.username === username &&
                element.password === password.value &&
                element.suspendido === false) {
                return this.login(username);
            } else {
                return super.addMsgAfter("Usuario o contraseña incorrectos", password);
            }
        });
    }
    login(username) {
        localStorage.setItem('usuarioLogueado', username);
        location.href = "comunidad.html";
    }
    limpiarVentana() {
        super.delMsg();
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
    }
}
let controllerLogin = new ControllerLogin();