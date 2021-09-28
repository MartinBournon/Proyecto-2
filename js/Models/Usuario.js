class Usuario {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatar = "";
        this.pais = "";
        this.fechaNacimiento = "";
        this.idioma = "en";
        this.suspendido = false;
        this.permiso = 1;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
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
    getPermiso(){
        return this.permiso;
    }
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
    setPermiso(valor){
        this.permiso = valor;
    }
}
class Administrador extends Usuario {
    constructor(username, password, email) {
        super(username, password, email);
        this.permiso = 2;
    }
}

