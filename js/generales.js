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
//BUSCADOR
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}