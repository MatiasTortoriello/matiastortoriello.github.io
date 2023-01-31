function mostrar(id){
    let seccion = document.getElementById(id)

    if (seccion.style.display === "none"){
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}