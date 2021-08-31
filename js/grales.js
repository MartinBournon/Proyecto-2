let usuarios;
function cargarUsuarios() {
    if (!localStorage.getItem('usuarios')) {
        usuarios = [];
    } else {
        usuarios = localStorage.getItem('usuarios');
        usuarios = JSON.parse(usuarios);
    }
}