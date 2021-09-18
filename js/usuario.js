class Usuario {
    constructor(username, password, nombre, email) {
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.avatar = '';
        this.suspendido = false;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getNombre() {
        return this.nombre;
    }
    getEmail() {
        return this.email;
    }
    getAvatar() {
        return this.avatar;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEmail(email) {
        this.email = email;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    setSuspendido(valor) {
        this.suspendido = valor;
    }
}
class Administrador extends Usuario {
    constructor(username, password, nombre, email) {
        super(username, password, nombre, email);
    }
    getUsuarios() {}
    crearUsuario() {
    }
    suspenderUsuario(username) {
        usuarios.find(usuario => {
            if (usuario.username == username) {
                usuario.suspendido = true;
                actualizarUsuarios();
            }
        });
    }

    reactivarUsuario(username) {
        usuarios.find(usuario => {
            if (usuario.username == username) {
                usuario.suspendido = false;
                actualizarUsuarios();
            }
        });
    }
    eliminarUsuario(username) {
        usuarios.find(usuario => {
            if (usuario.username == username) {
                eliminarItemArray(usuario);
                actualizarUsuarios();
            }
        });
    }
}