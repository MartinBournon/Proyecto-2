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
    valida(element) {
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password');
        if (element.username === username &&
            element.password === password.value &&
            element.suspendido === false) {
            return element;
        } else {
            return null;
        }
    }
    validarLogin() {
        this.delMsg();
        let validar = this.getUsuarios().find(element => {
            return this.valida(element);
        });
        if (validar != null) {
            console.log(validar);
            this.login(validar);
        } else {
            this.addMsgAfter("Usuario o contraseña incorrectos", password);
        }
    }
    login(usuario) {
        let usuarioLogueado = {
            username: usuario.username,
            permiso: usuario.permiso,
        };
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
        if(usuario.permiso === 2){
            location.href = "adminpanel.html";
        }else{
            location.href = "index.html"
        }        
    }
    limpiarVentana() {
        this.delMsg();
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
    }
}
const controllerLogin = new ControllerLogin();