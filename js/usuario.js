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
    getSuspendido(){
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
}

class Administrador extends Usuario{
    constructor(username, password, nombre, email) {
        super(username, password, nombre, email);
    }
    suspenderUsuario(usuario) {
        usuario.suspendido = true;
    }
    reactivarUsuario(usuario) {
        usuario.suspendido = false;
    }  
}