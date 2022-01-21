//Creando el div General que abrazara a mis textos
let divGeneral = document.createElement("div");
let divTextosUno = document.createElement("div");
let divTextosDos = document.createElement("div");
let divTextosTres = document.createElement("div");

// Boton atras - adelante
let botonUno = document.createElement("button");
let botonDos = document.createElement("button");
let botonTres = document.createElement("button");

botonUno.innerText = "Parrafo Uno";
botonDos.innerText = "Parrafo Dos";
botonTres.innerText = "Parrafo Tres";

botonUno.id = "uno";

botonUno.onclick = muestraParrafoUno;
botonDos.onclick = muestraParrafoDos;
botonTres.onclick = muestraParrafoTres;

// Creando las etiquetas <p>
let textUno = document.createElement("p");
let textDos = document.createElement("p");
let textTres = document.createElement("p");
let textVacio = document.createElement("p");


//Añadiendo contenido a las etiquetas <p>
textUno.innerText = "Parrafo 1\nHTML";
textDos.innerText = "Parrafo 2\nCSS";
textTres.innerText = "Parrafo 3\nJS";

function muestraParrafoUno(event){ 
    textUno.style.display="block";
    divTextosUno.appendChild(textUno);
    document.body.appendChild(divTextosUno);
    textDos.style.display="none";
    textTres.style.display="none"
    /*
    document.body.removeChild(divTextosDos);
    document.body.removeChild(divTextosTres);
    */
}

function muestraParrafoDos(event){  
    textDos.style.display="block";
    divTextosDos.appendChild(textDos);
    document.body.appendChild(divTextosDos);
    textUno.style.display="none";
    textTres.style.display="none"
    /*
    document.body.removeChild(divTextosUno);
    document.body.removeChild(divTextosTres);  
    */
}

function muestraParrafoTres(event){
    textTres.style.display="block";
    divTextosTres.appendChild(textTres);
    document.body.appendChild(divTextosTres);
    textUno.style.display="none";
    textDos.style.display="none" 
    /*   
    document.body.removeChild(divTextosUno);
    document.body.removeChild(divTextosDos); 
    */
}

let elementosHTML = [botonUno, botonDos, botonTres];

elementosHTML.forEach(element => {
    divGeneral.appendChild(element);
});

document.body.appendChild(divGeneral);

/*

function mostrar*/