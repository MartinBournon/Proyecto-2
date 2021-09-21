class Controller {
    constructor() {
        this.usuarios = this.cargarUsuarios();
        // localStorage.clear();
    }
    getUsuarios() {
        return this.usuarios;
    }
    cargarUsuarios() {
        let usuarios = [];
        if (!localStorage.getItem('usuarios')) {
            return usuarios;
        } else {
            usuarios = localStorage.getItem('usuarios');
            usuarios = JSON.parse(usuarios);
            return usuarios;
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
        return this.usuarios.find(usuario => {
            if (usuario.username == username) {
                return usuario;
            } else {
                return null;
            }
        });
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