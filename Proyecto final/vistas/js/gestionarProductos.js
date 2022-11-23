function guardar(){
    var _cod = document.getElementById("cod").value;
    var _nom = document.getElementById("nomb").value;
    var _ref = document.getElementById("ref").value;
    var _porga = document.getElementById("porga").value;
    var _stock = document.getElementById("stock").value;
    var _stockmin = document.getElementById("stockmin").value;
    var _Precio = document.getElementById("Precio").value;

    var fila="<tr><td>"+_cod+"<tr><td>"+_nom+"<tr><td>"+_ref+"<tr><td>"+_porga+"<tr><td>"+_stock+"<tr><td>"+_stockmin+"<tr><td>"+_Precio;

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}