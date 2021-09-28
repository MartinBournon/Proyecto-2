class ControllerAdmin extends Controller {
    constructor() {
        super();
        this.listarUsuarios();
        this.setListeners();
    }
    setListeners() {
        const btnSuspender = document.querySelectorAll(".btnSuspender");
        btnSuspender.forEach(element => {
            element.addEventListener("click", (event) => {
                let td = event.target.parentNode;
                let tr = td.parentNode;
                this.cambiarEstadoSuspension(tr.cells[0].textContent);
            });
        });
        const btnEliminar = document.querySelectorAll(".btnEliminar");
        btnEliminar.forEach(element => {
            element.addEventListener("click", (event) => {
                if (confirm("Está seguro que desea eliminar al usuario?, esto no se puede revertir")) {
                    let td = event.target.parentNode;
                    let tr = td.parentNode;
                    this.eliminarUsuario(tr.cells[0].textContent);
                    tr.parentNode.removeChild(tr);
                }
            });
        });
    }
    cambiarEstadoSuspension(username) {
        let usuario = this.buscarUsuario(username);
        if (usuario.suspendido) {
            usuario.suspendido = false;
        } else {
            usuario.suspendido = true;
        }
        this.actualizarUsuarios();
        this.actualizarTabla();
    }
    actualizarTabla() {
        document.querySelector("#listadoUsuarios").innerHTML = "";
        this.listarUsuarios();
        this.setListeners();
    }
    eliminarUsuario(username) {
        let i = this.usuarios.findIndex(usuario => usuario.username === username);
        if (i !== -1) {
            this.usuarios.splice(i, 1);
        }
        this.actualizarUsuarios();
    }
    listarUsuarios() {
        const usuarios = this.getUsuarios();
        let listadoUsuarios = document.querySelector("#listadoUsuarios");
        usuarios.forEach(element => {
            if (element.permiso === 1) {
                let row = document.createElement("tr");
                row.appendChild(this.crearTd(element.username, false));
                row.appendChild(this.crearTd(element.email), false);
                if (!element.suspendido) {
                    row.appendChild(this.crearTd('<i type="button" id="" class="far fa-thumbs-up btnSuspender"></i>', true));
                } else {
                    row.appendChild(this.crearTd('<i type="button" id="" class="far fa-thumbs-down btnSuspender"></i>', true));
                }
                row.appendChild(this.crearTd('<i type="button" id="" class="far fa-trash-alt btnEliminar"></i>', true));
                listadoUsuarios.appendChild(row);
            }
        });
    }
    crearTd(texto, icono) {
        let td = document.createElement("td");
        if (icono) {
            td.innerHTML = texto;
        } else {
            td.textContent = texto;
        }
        return td;
    }  
}
const controllerAdmin = new ControllerAdmin();