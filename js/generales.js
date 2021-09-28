let usuarios;
function cargarUsuarios() {
    if (!localStorage.getItem('usuarios')) {
        usuarios = [];
    } else {
        usuarios = localStorage.getItem('usuarios');
        usuarios = JSON.parse(usuarios);
    }
}

function actualizarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function eliminarItemArray (item ) {
    let i = usuarios.indexOf( item ); 
    if ( i !== -1 ) {
        usuarios.splice( i, 1 );
    }
}
