
class Controller {
    constructor() {
        this.usuarios = this.cargarUsuarios();
        // this.gruposMusicales = this.cargarGruposMusicales();
    }
    getUsuarios() {
        return this.usuarios;
    }
    cargarUsuarios() {
        if (!localStorage.getItem('usuarios')) {
            return this.usuarios = [];
        } else {            
            console.log("Cargar Usuarios");
            let usuarios = localStorage.getItem('usuarios');
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
