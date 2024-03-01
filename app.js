let textoACifrar;

function capturarTextoU(){
    textoACifrar= document.getElementById('texto-usuario').value;


    let cifrado=textoACifrar    
                                .replace(/e/gi, 'enter')
                                .replace(/i/gi, 'imes')
                                .replace(/a/gi, 'ai')
                                .replace(/o/gi, 'ober')
                                .replace(/u/gi, 'ufat');
    /*Para que el encriptado pueda funcionar, los replace deben tener vocales que ya 
    hayan sido reemplazadas, por ejemplo la i, en el encriptado debe tener solo la i y la e 
    que ya fue encriptada, si ponemos otra letra no funcionara ya que las demas no la ha 
    leido el programa aun, va de arriba hacia abajo */

    if(textoACifrar.length !=0){
        document.getElementById("texto-cifrado").value=cifrado;
        textoACifrar= document.getElementById('texto-usuario').value="";
        let status= document.getElementById('status').innerHTML='Texto cifrado exitosamente';
    }else{
        alert('favor ingresa un texto para cifrar');
    }

}

function bloquearCaracteresEspeciales(textarea) {
    let textareaValue = textarea.value;
    let filteredValue = textareaValue.replace(/[^\w\s]/gi, ''); // Expresión regular para permitir solo letras, números, espacios y guiones bajos (_)

    if (textareaValue !== filteredValue) {
        textarea.value = filteredValue;
    }
}


function desencriptar(){
    let textoACifrar= document.getElementById('texto-cifrado').value;
    let descifrado= textoACifrar
                                .replace(/enter/gi, 'e')
                                .replace(/imes/gi, 'i')
                                .replace(/ai/gi, 'a')
                                .replace(/ober/gi, 'o')
                                .replace(/ufat/gi, 'u');
    
    if(textoACifrar.length!=0){
        document.getElementById('texto-usuario').value=descifrado;
        textoACifrar= document.getElementById('texto-cifrado').value="";

        let status= document.getElementById('status').innerHTML='Texto descifrado exitosamente';
    }else{
        alert('Ingresa un texto para descifrar');
    }
}


function copiarTexto() {

    //Esta parte es para apretar con un boton que haga lo mismo que el
    //boton de copiar


    let textoUsuario = document.getElementById('texto-usuario').value;
    let textoCifrado = document.getElementById('texto-cifrado').value;

    if (textoUsuario !== '') {
        document.getElementById('texto-usuario').select();
        document.execCommand("copy");
        alert("copiado");
    } else if (textoCifrado !== '') {
        document.getElementById('texto-cifrado').select();
        document.execCommand("copy");
        alert("copiado");
    } else {
        alert("No hay nada para copiar");
    }
}

