function login() {

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;


    if (usuario == "administrador" && contraseña == "123") {
        window.location.href = "paginaPriciplAdministrador.html";
    } else if (usuario == "secretaria" && contraseña == "123") {
        window.location.href = "secretaria.html";
    } else if (usuario == "gerente" && contraseña == "123") {
        window.location.href = "GerentePaginaPrincipal.html";
    } else if (usuario == "vendedor" && contraseña == "123") {
        window.location.href = "PaginaPrincipalVendedor.html";
    } else {
        alert("Usuario o contraseña errados");
    }

}