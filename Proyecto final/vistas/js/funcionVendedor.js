function guardar() {

    var _codi = document.getElementById("codi").value;
    var _nom = document.getElementById("canti").value;
    var _produ = document.getElementById("precio").value
    var _canti = Number(document.getElementById("nomb").value);
    var _precio = Number(document.getElementById("produ").value);

    var resultado = _canti * _precio

    
   



    var fila = "<tr><td>" + _codi + "</td><td>" + _nom + "</td><td>" + _produ + "</td><td>" + _canti + "</td><td>" +
        _precio + "</td><td>" + resultado + "</td><tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablita").appendChild(btn);
}



function SumarAutomatico (valor) {
    var _canti = Number(document.getElementById("nomb").value);
    var _precio = Number(document.getElementById("produ").value);

    var resultado = _canti * _precio

    var TotalSuma = 0;  
    valor = parseInt(valor); // Convertir a numero entero (número).
    TotalSuma = document.getElementById('r').innerHTML;
    // Valida y pone en cero "0".
    TotalSuma = (TotalSuma == null || TotalSuma == undefined || TotalSuma == "") ? 0 : TotalSuma;
    /* Variable genrando la suma. */
    TotalSuma = (parseInt(TotalSuma) + parseInt(resultado));
    // Escribir el resultado en una etiqueta "span".
    document.getElementById('r').innerHTML = TotalSuma;
}

