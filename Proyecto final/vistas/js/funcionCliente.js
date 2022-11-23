function guardar() {
    var _telef = document.getElementById("telef1").value;




    var fila = "<tr><td>" + _telef + "</td><tr>";


    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablita").appendChild(btn);
}

function guardar1() {

    var _redes = document.getElementById("redes1").value;

    var fila2 = "<tr><td>" + _redes + "</td><tr>";
    var btn1 = document.createElement("TR");
    btn1.innerHTML = fila2;
    document.getElementById("tablita2").appendChild(btn1);
}