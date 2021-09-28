class ControllerAccountSettings extends Controller {
    constructor() {
        super();
        this.usuarioLogueado = this.getUsuarioLogueado();
        this.cargarDatos();
        this.setListeners();
    }
    setListeners() {
        const btnCambiarAvatar = document.querySelector("#btnCambiarAvatar");
        const btnGuardarCambios = document.querySelector("#formAccuntSettings");
        const checkModoOscuro = document.querySelector("#flexSwitchCheckDefault");
        checkModoOscuro.addEventListener('change', (event) => {
            if (event.target.checked) {
                console.log("Modo Oscuro");
                this.cambiarModoClaroOscuro();
            } else {
                console.log("Modo Claro");
                this.cambiarModoClaroOscuro();
            }
        });
        btnGuardarCambios.addEventListener("submit", (event) => {
            event.preventDefault();
            this.cambiarDatos();
        });
        btnCambiarAvatar.addEventListener('click', () => {
            this.listarAvatares();
        });
    }
    cambiarModoClaroOscuro() {
        let inputs = document.querySelectorAll("input");
        let selects = document.querySelectorAll("select");
        let buttons = document.querySelectorAll("button");
        buttons.forEach(element => {
            element.classList.toggle('bg-dark');
            element.classList.toggle('text-light');
        });
        selects.forEach(element => {
            element.classList.toggle('bg-dark');
            element.classList.toggle('text-light');
        });
        inputs.forEach( element => {
            element.classList.toggle('bg-dark');
            element.classList.toggle('text-light');
        });
    }
    getUsuarioLogueado() {
        let usuarioLogueado = sessionStorage.getItem('usuarioLogueado');
        usuarioLogueado = JSON.parse(usuarioLogueado);
        return usuarioLogueado;
    }
    cargarDatos() {
        let usuario = this.buscarUsuario(this.usuarioLogueado.username);
        document.querySelector(".contenedorAvatar__img").setAttribute("src", usuario.avatar);
        document.querySelector("#inputNuevoUsuario").value = usuario.username;
        document.querySelector("#inputNuevaFechaNac").value = usuario.fechaNacimiento;
        document.querySelector("#inputNuevoIdioma").value = usuario.idioma;
        document.querySelector("#inputNuevoPais").value = usuario.pais;
    }
    listarAvatares() {
        let modalBody = document.querySelector("#listadoAvatares");
        if (!modalBody.hasChildNodes()) {
            for (let i = 1; i < 9; i++) {
                let div = this.crearDiv();
                div.className = "avatar";
                div.appendChild(this.crearImg());
                div.firstChild.className = "avatar__img";
                div.firstChild.setAttribute("type", "button");
                div.firstChild.setAttribute("src", `./img/avatar/${i}.jpeg`);
                div.firstChild.setAttribute("alt", "Avatar banda de Rock");
                div.firstChild.addEventListener('click', () => {
                    let usuario = this.buscarUsuario(this.usuarioLogueado.username);
                    usuario.avatar = `./img/avatar/${i}.jpeg`;
                    $(function () {
                        $('#modalAvatares').modal('toggle');
                    });
                    this.actualizarUsuarios();
                    this.cargarDatos();
                });
                modalBody.appendChild(div);
            }
        }
    }
    crearDiv() {
        return document.createElement("div");
    }
    crearImg() {
        return document.createElement("img");
    }
    cambiarDatos() {
        this.delMsg();
        let usuario = this.buscarUsuario(this.usuarioLogueado.username);
        let password = this.validaPassword();
        let usuarioNuevo = document.querySelector("#inputNuevoUsuario").value;
        let pais = document.querySelector("#inputNuevoPais").value;
        let idioma = document.querySelector("#inputNuevoIdioma").value;
        let fechaNacimiento = document.querySelector("#inputNuevaFechaNac").value;
        if (password != "") {
            usuario.password = password;
        }
        usuario.username = usuarioNuevo;
        usuario.pais = pais;
        usuario.idioma = idioma;
        usuario.fechaNacimiento = fechaNacimiento;
        this.usuarioLogueado.username = usuarioNuevo;
        this.actualizarUsuarios();
        this.actualizarUsuarioLoguado();
    }
    actualizarUsuarioLoguado() {
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(this.usuarioLogueado));
    }
    validaPassword() {
        const REGEXPASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        let password = document.querySelector("#inputNuevoPassword").value;
        let password2 = document.querySelector("#inputNuevoPassword2");
        console.log(password);
        if (password.length > 0 && password2.value.length > 0) {
            if (!REGEXPASSWORD.test(password) || password != password2.value) {
                this.addMsgAfter("Both password must be the same and must " +
                    "have unless one uppercase, one lowercase and one number", password2);
                return "";
            } else {
                return password;
            }
        }
        return "";
    }
}
const controllerAccountSettings = new ControllerAccountSettings();