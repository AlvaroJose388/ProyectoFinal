function guardar(){
    
    var _3 = document.getElementById("3").value;
    var _4 = document.getElementById("4").value;
    var _5 = document.getElementById("5").value;
    var _6 = document.getElementById("6").value;
    var resultado = _6 * _5

    var fila="<tr><td>"+_3+"<tr><td>"+_4+"<tr><td>"+_5+"<tr><td>"+_6+"<tr><td>"+resultado;

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
    
}

function SumarAutomatico (valor) {
    var _5 = document.getElementById("5").value;
    var _6 = document.getElementById("6").value;

    var resultado = _6 * _5

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
