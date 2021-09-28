class Controller {
    constructor() {
        this.cargarUsuarios();
    }
    getUsuarios() {
        return this.usuarios;
    }
    cargarUsuarios() {
        let usuarios = [new Administrador("admin", "Admin123", "admin@admin.com")];
        if (!localStorage.getItem('usuarios')) {
            this.usuarios = usuarios;
            this.actualizarUsuarios;
        } else {
            usuarios = localStorage.getItem('usuarios');
            this.usuarios = JSON.parse(usuarios);
        }
    }
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