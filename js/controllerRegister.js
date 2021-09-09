class ControllerRegister extends Controller {
    constructor() {
        super();
        super.cargarUsuarios();
        this.setListeners();
    }
    setListeners() {
        const btnRegistrar = document.querySelector("#formRegistrar");
        const btnCerrar = document.querySelector("#btnCerrarReg");
        btnRegistrar.addEventListener("submit", (event) => {
            event.preventDefault();
            this.validarRegistro();
        });
        btnCerrar.addEventListener('click', () => {
            this.limpiarVentana();
        });
    }
    validarRegistro() {
        const regExpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        const regExpUsername = /[a-z\d]{8,16}/;
        const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let username = document.querySelector("#usernameReg");
        let password = document.querySelector("#passwordReg").value;
        let password2 = document.querySelector("#passwordReg2");
        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email");
        let b = false;
        super.delMsg();        
        if (username.value === '' || username.value.length === 0) {
            super.addMsgAfter("Username can't be empty", username);
            b = true;
        } else if (!regExpUsername.test(username.value)) {
            super.addMsgAfter("Username must be between 5 and 16 characters," +
                "can contain uppercase, lowercase and numbers", username);
                b = true;
        } else if (super.buscarUsuario(username.value) != null) {
            super.addMsgAfter("This username is already in use", username);
            b = true;
        }
        if (!regExpPassword.test(password) && password != password2.value) {
            super.addMsgAfter("Both password must be the same and must " +
                "have unless one uppercase, one lowercase and one number", password2);
                b = true;
        }
        if(!regExpEmail.test(email.value)){
            super.addMsgAfter("Enter a valid email", email);
            b = true;
        }
        if(!b){
            this.registrar(username.value,password,nombre,email.value);
        }
    }
    registrar(username, password, nombre, email) {
        let usuario = new Usuario(username, password, nombre, email);
        super.getUsuarios().push(usuario);
        super.actualizarUsuarios();
    }
    limpiarVentana() {
        super.delMsg();
        document.querySelector("#usernameReg").value = "";
        document.querySelector("#passwordReg").value = "";
        document.querySelector("#passwordReg2").value = "";
        document.querySelector("#nombre").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#aceptoCond").checked = false;
    }
}
let controllerRegister = new ControllerRegister();