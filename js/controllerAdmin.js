class ControllerAdmin extends Controller {
    constructor(admin) {
        super();
        this.admin = admin;
        // this.cargarUsuarios();
        this.listarUsuarios();
    }
    suspenderUsuario(username) {
        this.admin.suspender(
            this.buscarUsuario(username));
        this.actualizarUsuarios();
    }
    reactivarUsuario(username) {
        this.admin.reactivar(
            this.buscarUsuario(username));
        this.actualizarUsuarios();
    }
    eliminarUsuario(username) {
        let i = this.usuarios.indexOf(username);
        if (i !== -1) {
            this.usuarios.splice(i, 1);
        }
        this.actualizarUsuarios();
    }
    listarUsuarios() {
        const usuarios = this.getUsuarios();
        let listadoUsuarios = document.querySelector("#listadoUsuarios");
        usuarios.forEach(element => {        
            let row = document.createElement("tr");
            row.appendChild(this.crearTd(element.getUsername()));
            row.appendChild(this.crearTd(element.getPassword()));
            row.appendChild(this.crearTd(element.getNombre()));
            row.appendChild(this.crearTd(element.getEmail()));
            listadoUsuarios.appendChild(row);
        });

    }
    crearTd(texto){
        let td = document.createElement("td");
        td.textContent = texto;
        return td;
    }
}
