//document.getElementById("mensajeSalida").style.visibility = "hidden";
//document.getElementById("imagen").style.display = "block";
//document.getElementById("cop").style.display = "none";

function ocultar(){
    var img=document.getElementById("imagen");
    var x =document.getElementById("mensajeSalida").style.visibility = "hidden";
    if(x == "hidden")

    x = "visible";

}
 
    function encriptar() {
        
    const texto = document.getElementById("mensajeEntrada").value;
  
    // Verificar que se ingresó un texto
    if (texto.length === 0) {
      alert("Debes ingresar un texto");
      return;
    }


    
    // Realizar los reemplazos en una sola llamada a replace()
    const textoCifrado = texto.replace(/e/gi, "enter")
                             .replace(/i/gi, "imes")
                             .replace(/a/gi, "ai")
                             .replace(/o/gi, "ober")
                             .replace(/u/gi, "ufat");
  
    // Actualizar el campo de entrada 
    document.getElementById("mensajeSalida").value = textoCifrado.toLowerCase();

 

    formulario.reset();
    return false;
    
   
    texto.value = "";
    
    
  }

  

  function caracteres(e){
   
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz"

    especiales = [8,13,32];
    tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
        tecla_especial = true;
        break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("ingresar solo letras");
        return false;
    }
  }


  function desencriptar() {
    const texto = document.getElementById("mensajeSalida").value;
  
  
    // Realizar los reemplazos en una sola llamada a replace()
    const textoCifrado = texto.replace(/enter/gi, "e")
                             .replace(/imes/gi, "i")
                             .replace(/ai/gi, "a")
                             .replace(/ober/gi, "o")
                             .replace(/ufat/gi, "u");
  
    // Actualizar el campo de entrada 
    document.getElementById("mensajeEntrada").value = textoCifrado;

    formulario2.reset();
    return false;
    texto.value = ""
  }

  
  function copiado() {

    const copyText = document.getElementById("mensajeSalida").value;
  

    navigator.clipboard.writeText(copyText);
 
    return;
}
 