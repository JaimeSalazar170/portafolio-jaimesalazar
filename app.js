//MENU LATERAL
var menu_visible = false
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display="block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}

// FUNCION OCULTAR MENU 
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// BARRAS IDENTIFICADAS POR ID
function crearBarra(id_barra){
    for(i=0; i<= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div); 
    }
}

// SELECCION DE BARRAS GENERALES PARA MANIPULAR
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let illustrator = document.getElementById("illustrator");
crearBarra(illustrator);
let react = document.getElementById("react");
crearBarra(react);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);

// Guardar la cantidad de barritas que van en las habilidades

let contadores = [-1,-1,-1,-1,-1,-1]
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro == false){
        entro = true; 
         const intervalHtml = setInterval(function(){
                pintarBarra(html, 16, 0, intervalHtml);
            },100);
        const intervalJavascript = setInterval(function(){
                pintarBarra(javascript, 11, 2, intervalJavascript);
            },100);
        const intervalWordpress = setInterval(function(){
                pintarBarra(wordpress, 16, 3, intervalWordpress);
            },100);
            const intervalIllustrator = setInterval(function(){
                pintarBarra(illustrator, 13, 1, intervalIllustrator);
            },100); 
        const intervalreact = setInterval(function(){
                pintarBarra(react, 16, 4, intervalreact);
            },100);
        const intervalnodejs = setInterval(function(){
                pintarBarra(nodejs, 15, 5, intervalnodejs);
            },100);                                                 
        }                                 
    }
//LLENADO PROGRESIVO DE BARRAS DE HABILIDADES
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#dc143c";
    }else{
        clearInterval(interval)
    }
}

//DETECTAR SCROLL DEL MOUSE PARA APLICAR ANIMACION
window.onscroll = function(){
    efectoHabilidades();
}
    