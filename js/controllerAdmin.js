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
                let td = event.target.parentNode;
                let tr = td.parentNode;
                this.eliminarUsuario(tr.cells[0].textContent);
                tr.parentNode.removeChild(tr);
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
    // suspenderUsuario(username) {
    //     this.buscarUsuario(username).suspendido = true;
    //     this.actualizarUsuarios();
    // }
    // reactivarUsuario(username) {
    //     this.buscarUsuario(username).suspendido = false;
    //     this.actualizarUsuarios();
    // }
    actualizarTabla(){
        document.querySelector("#listadoUsuarios").innerHTML= "";
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
        let paginaActual = 1;
        const registrosPorPagina = 3;
        const usuarios = this.getUsuarios();
        let listadoUsuarios = document.querySelector("#listadoUsuarios");
        usuarios.forEach(element => {
            let row = document.createElement("tr");
            row.appendChild(this.crearTd(element.username, false));
            row.appendChild(this.crearTd(element.nombre), false);
            row.appendChild(this.crearTd(element.email), false);
            if (!element.suspendido) {
                row.appendChild(this.crearTd('<i type="button" id="" class="far fa-thumbs-up btnSuspender"></i>', true));
            } else {
                row.appendChild(this.crearTd('<i type="button" id="" class="far fa-thumbs-down btnSuspender"></i>', true));
            }
            row.appendChild(this.crearTd('<i type="button" id="" class="far fa-trash-alt btnEliminar"></i>', true));
            listadoUsuarios.appendChild(row);
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

    cambiarPagina(pagina) {
        const btnSig = document.getElementById("btnSig");
        const btnAnt = document.getElementById("btnAnt");
        const paginaNro = document.getElementById("page");

        // Validate page
        if (page < 1) pagina = 1;
        if (pagina > getPaginas()) pagina = getPaginas();

        listadoUsuarios.innerHTML = "";

        for (let i = (pagina - 1) * registrosPorPagina; i < (pagina * registrosPorPagina) && i < objJson.length; i++) {
            listadoUsuarios.innerHTML += objJson[i].adName + "<br>";
        }
        paginaNro.innerHTML = pagina + "/" + getPaginas();

        if (pagina == 1) {
            btnAnt.style.visibility = "hidden";
        } else {
            btnAnt.style.visibility = "visible";
        }

        if (pagina == getPaginas()) {
            btnSig.style.visibility = "hidden";
        } else {
            btnSig.style.visibility = "visible";
        }
    }

    paginaSiguiente() {
        if (paginaActual < getPaginas()) {
            paginaActual++;
            changePage(paginaActual);
        }
    }
    paginaAnterior() {
        if (paginaActual > 1) {
            paginaActual--;
            changePage(paginaActual);
        }
    }
    getPaginas() {
        return Math.ceil(objJson.length / registrosPorPagina);
    }

}

const c = new ControllerAdmin();