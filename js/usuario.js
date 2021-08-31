class Usuario {
    constructor(user, password, nombre, email) {
        this.user = user;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.avatar = '';
    }
    getUser() {
        return this.user;
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
}
class Administrador extends Usuario {
    constructor(user, password, nombre, email) {
        super(user, password, nombre, email);
    }
    listarUsuarios() {

    }
    crearUsuario() {

    }
    suspenderUsuario() {

    }
    eliminarUsuario() {

    }
}