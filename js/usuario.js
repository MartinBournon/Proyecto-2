class Usuario {
    constructor(username, password, nombre, email) {
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.avatar = '';
        this.suspendido = false;
        this.seguidos = [];
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
    getSuspendido() {
        return this.suspendido;
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
    seguir(username) {
        this.seguidos.push(username);
    }
    dejarSeguir(username) {
        let i = this.seguidos.indexOf(username);
        if (i !== -1) {
            this.seguidos.splice(i, 1);
        }
        super.actualizarUsuarios();
    }

}
class Administrador extends Usuario {
    constructor(username, password, nombre, email) {
        super(username, password, nombre, email);
    }
    suspender(usuario) {
        usuario.suspendido = true;
    }
    reactivar(usuario) {
        usuario.suspendido = false;
    }
}
