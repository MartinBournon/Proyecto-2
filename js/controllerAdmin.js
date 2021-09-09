class ControllerAdmin extends Controller {
    constructor(admin) {
        super();
        this.admin = admin;
        super.cargarUsuarios();
        this.listarUsuarios();
    }
    suspenderUsuario(username) {
        this.admin.suspender(
            super.buscarUsuario(username));
        super.actualizarUsuarios();
    }
    reactivarUsuario(username) {
        this.admin.reactivar(
            super.buscarUsuario(username));
        super.actualizarUsuarios();
    }
    eliminarUsuario(username) {
        let i = super.usuarios.indexOf(username);
        if (i !== -1) {
            super.usuarios.splice(i, 1);
        }
        super.actualizarUsuarios();
    }
    listarUsuarios() {
        const usuarios = super.getUsuarios();
        let listadoUsuarios = document.querySelector("#listadoUsuarios");
        usuarios.forEach(element => {        
            let row = document.createElement("tr");
            row.appendChild(this.crearTd(element.username));
            row.appendChild(this.crearTd(element.password));
            row.appendChild(this.crearTd(element.nombre));
            row.appendChild(this.crearTd(element.email));
            listadoUsuarios.appendChild(row);
        });

    }
    crearTd(texto){
        let td = document.createElement("td");
        td.textContent = texto;
        return td;
    }
}
let aa = new Administrador("a", "a", "a", "a");
let a = new ControllerAdmin(aa);