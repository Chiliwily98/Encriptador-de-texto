// a-ai, e-enter, i-imes, o-ober, u-ufat

//separa el mensaje en palabras
function textoAPalabras(){
    let textoPrincipal=document.querySelector(".texto-principal").value;
    return textoPrincipal.split(' ');
    
}

//separa las palabras en letras
function textoALetras(){
    
    let letrasDeMensaje=[];
    let prueba=textoAPalabras();
    for (let i = 0; i < prueba.length; i++) {
        letrasDeMensaje[i]=prueba[i].split('');   
        
    }
    return letrasDeMensaje;
}

//convierte las vocales en el encriptado
function encriptarTexto(){
    
    let prueba2=textoALetras();
    for (let i = 0; i < prueba2.length; i++) {
        
        for (let j = 0; j< prueba2[i].length; j++) {
            if (prueba2[i][j]=='a') {
                prueba2[i][j]='ai';
            }
            else if (prueba2[i][j]=='e') {
                prueba2[i][j]='enter';
            }
            else if (prueba2[i][j]=='i') {
                prueba2[i][j]='imes';
            }
            else if (prueba2[i][j]=='o') {
                prueba2[i][j]='ober';
            }
            else if (prueba2[i][j]=='u') {
                prueba2[i][j]='ufat';
            }
           
        }
    }    
    return prueba2;
}  

//juntar las palabras encriptadas
function juntarPalabras(){
    let palabrasJuntadas=encriptarTexto();
    let prueba3;
    let letrasEnPalabras=[];

    for (let i = 0; i < palabrasJuntadas.length; i++) {
       letrasEnPalabras[i]=palabrasJuntadas[i].join('');
    }
    prueba3=letrasEnPalabras.join(' ');
    return prueba3;
}

//boton encriptar
function encriptar() {

  console.log(juntarPalabras()); 
  imprimirMensajeEncriptado();
}
//fconvierte el encriptado en vocales
function desencriptarTexto(){
    let palabrasALetras = textoALetras();
    for (let i = 0; i < palabrasALetras.length; i++) {
        for (let j = 0; j < palabrasALetras[i].length; j++) {
          if (palabrasALetras[i][j]=='a') {
            palabrasALetras[i][j+1]='';
          }  
          if (palabrasALetras[i][j]=='e') {
            palabrasALetras[i][j+1]='';
            palabrasALetras[i][j+2]='';
            palabrasALetras[i][j+3]='';
            palabrasALetras[i][j+4]='';
          }  
          if (palabrasALetras[i][j]=='i') {
            palabrasALetras[i][j+1]='';
            palabrasALetras[i][j+2]='';
            palabrasALetras[i][j+3]='';
          }  
          if (palabrasALetras[i][j]=='o') {
            palabrasALetras[i][j+1]='';
            palabrasALetras[i][j+2]='';
            palabrasALetras[i][j+3]='';
          }  
          if (palabrasALetras[i][j]=='u') {
            palabrasALetras[i][j+1]='';
            palabrasALetras[i][j+2]='';
            palabrasALetras[i][j+3]='';
          }  
            
        }
              
    }
    return palabrasALetras;
}
function juntarPalabrasDes(){
    let palabrasJuntadas=desencriptarTexto();
    let prueba3;
    let letrasEnPalabras=[];

    for (let i = 0; i < palabrasJuntadas.length; i++) {
       letrasEnPalabras[i]=palabrasJuntadas[i].join('');
    }
    prueba3=letrasEnPalabras.join(' ');
    return prueba3;
}

//boton desencriptar
function desencriptar(){
    console.log(juntarPalabrasDes());
    imprimirMensajeDesencriptado();

}
//imrpime el mensaje desencriptado en el recuadro
function imprimirMensajeDesencriptado(){
    let textoUno = document.querySelector(".texto1");
    let textoDos = document.querySelector(".texto2");
    let imagen = document.getElementById("muñequito");

    imagen.style.display='none';
    textoDos.style.display='none';
    textoUno.style.marginTop='1.5vw';
    textoUno.innerHTML=juntarPalabrasDes();

}
//imrpime el mensaje encriptado en el recuadro
function imprimirMensajeEncriptado(){
    let textoUno = document.querySelector(".texto1");
    let textoDos = document.querySelector(".texto2");
    let imagen = document.getElementById("muñequito");

    imagen.style.display='none';
    textoDos.style.display='none';
    textoUno.style.marginTop='1.5vw';
    textoUno.innerHTML=juntarPalabras();
}