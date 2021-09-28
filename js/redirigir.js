if (!localStorage.getItem('usuarioLogueado')) {
    window.location.replace('/');
}
let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
if (window.location.pathname === "/adminpanel.html" && usuarioLogueado.permiso === 1) {
    window.location.replace('/');
}