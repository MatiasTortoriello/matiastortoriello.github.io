let experiencia = document.getElementById('experiencia');
let formacion = document.getElementById('formacion');
let otros_conocimientos = document.getElementById('otros-conocimientos');

onload = experiencia.style.display = "none", formacion.style.display="none", otros_conocimientos.style.display = "none";


function mostrar(id){
    let seccion = document.getElementById(id)
    
    if (seccion.style.display === "none"){
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}