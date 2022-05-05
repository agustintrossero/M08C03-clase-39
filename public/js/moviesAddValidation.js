window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');



    console.log("hola")
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let tituloPelicula = document.querySelector("#title")
tituloPelicula.focus()


var inputs  = document.querySelectorAll("input, select")
let ulErrors = document.querySelector(".errores")

formulario.addEventListener("submit", (e)=>{
    ulErrors.innerHTML = ""
    ulErrors.classList.add("is-invalid")

    let hayErrores = ""

    inputs.forEach(input =>{
        if (input.value == ""){
            e.preventDefault()
            ulErrors.innerHTML += "<li>El campo " + input.name + " esta vacio</li>"
            input.classList.remove("is-valid")
            input.classList.add("is-invalid")
           hayErrores = "vacio" 
        }
        else {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
        }
        
    })
     
if (hayErrores != "vacio"){
    if (inputs[1].value > 10 || inputs[1].value < 0 ){
        inputs[1].classList.add("is-invalid")
        inputs[1].classList.remove("is-valid")
        e.preventDefault()
    } else {
        inputs[1].classList.remove("is-invalid")
        inputs[1].classList.add("is-valid")
    }
     if (inputs[2].value > 10 || inputs[2].value < 0 ){
        inputs[2].classList.add("is-invalid")
        inputs[2].classList.remove("is-valid")
        e.preventDefault()
    } else {
        inputs[2].classList.remove("is-invalid")
        inputs[2].classList.add("is-valid")
    }
}

})


inputs.forEach(input=>{
    input.addEventListener("change", (e)=>{
        if(e.target.value == ""){
            e.preventDefault()
            input.classList.remove("is-valid")
            input.classList.add("is-invalid")
        } else {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
        }
    })
})
}

/*
El formulario contará con validaciones especiales para los siguientes campos: 
○        Caliﬁcación y Premios: deberá validar que el valor ingresado esté
comprendido entre cero (0) y diez (10).
○        Duración: deberá validar que el valor ingresado esté comprendido entre 60 
y 360 minutos.
●        Si los campos cumplen con los requerimientos exigidos, debemos hacer lo 
siguiente:
○        A todos los campos input o select se les deberá agregar la clase “is-valid”, 
como constancia que ese campo pasó la validación. Esta ya se encuentra 
creada en el archivo: /public/css/style.css.

 */