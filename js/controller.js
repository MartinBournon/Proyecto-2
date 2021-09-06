class Controller {
    constructor() {
        this.usuarios = this.cargarUsuarios();
    }
    getUsuarios(){
        return this.usuarios;
    }
    cargarUsuarios() {
        if (!localStorage.getItem('usuarios')) {
            return this.usuarios = [];
        } else {
            let usuarios = localStorage.getItem('usuarios');
            return this.usuarios = JSON.parse(usuarios);
        }
    }
    actualizarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
}
