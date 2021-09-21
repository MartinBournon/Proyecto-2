class ControllerLogin extends Controller {
    constructor() {
        super();
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
    login(usuario) {
        console.log("HELA");
        let usuarioLogueado = {usuario : usuario.username, permiso : usuario.permiso };
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
        location.href = "index.html";
    }
    limpiarVentana() {
        this.delMsg();
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
    }
}

let controllerLogin = new ControllerLogin();