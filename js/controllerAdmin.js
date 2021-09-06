class ControllerAdmin extends Controller {
    constructor(admin) {
        super();
        this.admin = admin;
        super.cargarUsuarios();
    }
    suspenderUsuario(username) {
        this.admin.suspenderUsuario(
            this.buscarUsuario(username));
        super.actualizarUsuarios();
    }
    reactivarUsuario(username) {
        this.admin.reactivarUsuario(
            this.buscarUsuario(username));
        super.actualizarUsuarios();
    }
    buscarUsuario(username) {
        let user;
        super.getUsuarios().find(usuario => {
            if (usuario.username == username) {
                user = usuario;
            } else {
                user = null;
            }
        });
        return user;
    }
    eliminarUsuario(username) {
        let i = usuarios.indexOf(username);
        if (i !== -1) {
            usuarios.splice(i, 1);
        }
        super.actualizarUsuarios();
    }
}
let aa = new Administrador("a", "a", "a", "a");
let a = new ControllerAdmin(aa);