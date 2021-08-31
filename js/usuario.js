class Usuario {
    constructor(user, password, nombre, email) {
        this.user = user;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.avatar = '';
        this.suspendido = false;
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
    getUsuarios() {
        cargarUsuarios();
        return usuarios;
    }
    crearUsuario() {
        let user= document.querySelector("#user").value;
        let password= document.querySelector("#password").value;
        let nombre= document.querySelector("#nombre").value;
        let email= document.querySelector("#email").value;
        let usuario = new Usuario(user, password, nombre, email);
        let usuario = new Usuario("c","c","c","c");
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    suspenderUsuario() {
       
    }

    reactivarUsuario(){

    }
    eliminarUsuario(user) {        
        localStorage.removeItem('usuarios', user);
        cargarUsuarios();
    }
}