
class ControllerRegister extends Controller {
    constructor() {
        super();
        // this.cargarUsuarios();
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
        const REGEXPASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        const REGEXUSERNAME = /^(?=.{5,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        const REGEXEMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let username = document.querySelector("#usernameReg");
        let password = document.querySelector("#passwordReg").value;
        let password2 = document.querySelector("#passwordReg2");
        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email");
        let b = false;
        this.delMsg();        
        if (username.value === '' || username.value.length === 0) {
            this.addMsgAfter("Username can't be empty", username);
            b = true;
        } else if (!REGEXUSERNAME.test(username.value)) {
            this.addMsgAfter("Username must be between 5 and 16 characters," +
                "can contain uppercase, lowercase and numbers", username);
                b = true;
        } else if (this.buscarUsuario(username.value) != null) {
            this.addMsgAfter("This username is already in use", username);
            b = true;
        }
        if (!REGEXPASSWORD.test(password) && password != password2.value) {
            this.addMsgAfter("Both password must be the same and must " +
                "have unless one uppercase, one lowercase and one number", password2);
                b = true;
        }
        if(!REGEXEMAIL.test(email.value)){
            this.addMsgAfter("Enter a valid email", email);
            b = true;
        }
        if(!b){
            this.registrar(username.value,password,nombre,email.value);
        }
    }
    registrar(username, password, nombre, email) {
        let usuario = new Usuario(username, password, nombre, email);
        this.getUsuarios().push(usuario);
        this.actualizarUsuarios();
    }
    limpiarVentana() {
        this.delMsg();
        let inputs = document.querySelectorAll("#formRegistrar .formModal__input");
        console.log(inputs);
        inputs.forEach(element => {
            element.value = "";
        });
        document.querySelector("#aceptoCond").checked = false;
    }
}
