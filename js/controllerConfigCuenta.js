class ControllerConfigCuenta extends Controller {
    constructor() {
        super();
        this.usuario = new Usuario("Martin", "1234", "Martin", "martin@hotmail.com");
        this.usuario.setAvatar("img/avatar/2.jpg");
        this.usuario.setFechaNacimiento("1991-08-27");
        this.usuario.setPais("Argentina");
        this.cargarDatos();
    }
    setListeners() {
        const btnGuardarCambios = document.querySelector("#btnGuardarCambios");
        btnGuardarCambios.addEventListener("submit", (event) => {
            event.preventDefault();
            this.cambiarDatos();
        });
    }
    cargarDatos() {
        document.querySelector(".contenedorAvatar__img").setAttribute("src", this.usuario.getAvatar());
        document.querySelector("#inputNuevoUsuario").value = this.usuario.getUsername();
        document.querySelector("#inputNuevaFechaNac").value = this.usuario.getFechaNacimiento();
        const selectIdioma = document.querySelector("#inputNuevoIdioma");
        const index = selectIdioma.selectedIndex;
        const opcion = selectIdioma.options[index].text;
        console.log(opcion);
    }
    
    cambiarAvatar() {
        document.querySelector(".contenedorAvatar__img").setAttribute("src", "img/avatar/1.jpg");
        this.usuario.setAvatar(direccion);
    }
    cambiarUsuario() {
        let usuarioNuevo = document.querySelector("#inputNuevoUsuario").value;
        this.setUsuario(usuarioNuevo);
    }
    cambiarContraseña() {
        const REGEXPASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        let password = document.querySelector("#inputNuevoPassword");
        let password2 = document.querySelector("#inputNuevoPassword2");
        if (!REGEXPASSWORD.test(password) && password != password2.value) {
            this.addMsgAfter("Both password must be the same and must " +
                "have unless one uppercase, one lowercase and one number", password2);
        } else {
            this.usuario.setPassword(password);
        }
    }
    cambiarFechaNacimiento() {

    }
    cambiarPais() {
        let pais = document.querySelector("#inputNuevoPais").value;
        this.usuario.setPais(pais);
    }
    cambiarIdioma() {
        let idioma = document.querySelector("#inputNuevoIdioma").value;
        this.usuario.setIdioma(idioma);
    }
    switchClaroOscuro() {

    }

}

let cont = new ControllerConfigCuenta();