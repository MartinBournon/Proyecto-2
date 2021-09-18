
class Controller {
    constructor() {
        this.usuarios = this.cargarUsuarios();
        // this.gruposMusicales = this.cargarGruposMusicales();
    }
    getUsuarios() {
        return this.usuarios;
    }
    cargarUsuarios() {
        let arrayObjetos = [];
        if (!localStorage.getItem('usuarios')) {
            return this.usuarios = [];
        } else {            
            let usuarios = localStorage.getItem('usuarios');
            usuarios = JSON.parse(usuarios);            
            usuarios.forEach( user => {
                const usuario = new Usuario(user.username, user.password, 
                    user.nombre, user.email);
                arrayObjetos.push(usuario);
            });
            return arrayObjetos;
        }
    }
    // cargarGruposMusicales() {
    //     if (!localStorage.getItem('gruposMusicales')) {
    //         return this.gruposMusicales = [];
    //     } else {
    //         let gruposMusicales = localStorage.getItem('gruposMusicales');
    //         return this.gruposMusicales = JSON.parse(gruposMusicales);
    //     }
    // }
    buscarUsuario(username) {
        let user;
        this.getUsuarios().find(usuario => {
            if (usuario.username == username) {
                user = usuario;
            } else {
                user = null;
            }
        });
        return user;
    }
    actualizarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
    addMsgAfter(msg, afterMe) {
        let p = document.createElement('p');
        p.className = "alerta";
        p.textContent = msg;
        afterMe.after(p);
    }
    delMsg() {
        if (document.querySelector(".alerta") != null) {
            document.querySelectorAll(".alerta").forEach(element => {
                element.remove();
            });
        }
    }
}
