class Usuario {
    constructor(username, password, nombre, email) {
        this.username = username;
        this.password = password;
        // this.nombre = nombre;
        this.email = email;
        this.avatar = "";
        this.pais = "";
        this.fechaNacimiento = "";
        this.idioma = "";
        this.suspendido = false;
        this.seguidos = [];
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    // getNombre() {
    //     return this.nombre;
    // }
    getEmail() {
        return this.email;
    }
    getAvatar() {
        return this.avatar;
    }
    getPais() {
        return this.pais;
    }
    getIdioma() {
        return this.idioma;
    }
    getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    getSuspendido() {
        return this.suspendido;
    }
    // setNombre(nombre) {
    //     this.nombre = nombre;
    // }
    setPassword(password) {
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    setPais(pais) {
        this.pais = pais;
    }
    setFechaNacimiento(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }
    setIdioma(idioma) {
        this.idioma = idioma;
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