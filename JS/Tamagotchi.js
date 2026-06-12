let hambre = Number(localStorage.getItem("hambre")) || 50;
let sueno = Number(localStorage.getItem("sueno")) || 50;
let salud = Number(localStorage.getItem("salud")) || 50;
let felicidad = Number(localStorage.getItem("felicidad")) || 50;
let higiene = Number(localStorage.getItem("higiene")) || 50;
let mundial = Number(localStorage.getItem("mundial")) || 0;

// Cargar todo al iniciar
actualizarTodo();

// Drag
function dragstartHandler(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev){
    ev.preventDefault();
}

// Soltar objeto
function dropHandler(ev){

    ev.preventDefault();

    const data = ev.dataTransfer.getData("text");

    switch(data){

        case "comida":
            hambre += 15;
            break;

        case "luna":
            sueno += 15;
            break;

        case "jugar":
            felicidad += 15;
            break;

        case "banar":
            higiene += 15;
            break;

        case "curar":
            salud += 15;
            break;

        case "mundial":
            mundial += 20;
            break;
    }

    actualizarTodo();
}

// Actualizar porcentajes
function actualizarTodo(){

    limitar();

    document.getElementById("lblPorcentajeHambre").innerHTML = hambre + "%";
    document.getElementById("lblPorcentajeSueno").innerHTML = sueno + "%";
    document.getElementById("lblPorcentajeSalud").innerHTML = salud + "%";
    document.getElementById("lblPorcentajeFelicidad").innerHTML = felicidad + "%";
    document.getElementById("lblPorcentajeHigiene").innerHTML = higiene + "%";
    document.getElementById("lblPorcentajeMundial").innerHTML = mundial + "%";

    guardarDatos();
    actualizarImagen();
}

// Limitar entre 0 y 100
function limitar(){

    hambre = Math.max(0, Math.min(100, hambre));
    sueno = Math.max(0, Math.min(100, sueno));
    salud = Math.max(0, Math.min(100, salud));
    felicidad = Math.max(0, Math.min(100, felicidad));
    higiene = Math.max(0, Math.min(100, higiene));
    mundial = Math.max(0, Math.min(100, mundial));

}

// Guardar en localStorage
function guardarDatos(){

    localStorage.setItem("hambre", hambre);
    localStorage.setItem("sueno", sueno);
    localStorage.setItem("salud", salud);
    localStorage.setItem("felicidad", felicidad);
    localStorage.setItem("higiene", higiene);
    localStorage.setItem("mundial", mundial);

}

// Cambiar imagen según el estado
function actualizarImagen(){

    const mascota = document.getElementById("zonaMascota");

    if(mundial >= 70){
        mascota.style.backgroundImage = "url('IMG/BRUCEMUNDIAL.png')";
    }
    else if(salud <= 20){
        mascota.style.backgroundImage = "url('IMG/BRUCEENFERMO.png')";
    }
    else if(felicidad <= 20){
        mascota.style.backgroundImage = "url('IMG/TRISTEBRUCE.png')";
    }
    else if(sueno <= 20){
        mascota.style.backgroundImage = "url('IMG/BRUCECANSADO.png')";
    }
    else if(hambre <= 20){
        mascota.style.backgroundImage = "url('IMG/BRUCEENOJADOO.png')";
    }
    else{
        mascota.style.backgroundImage = "url('IMG/BRUCENormal.png')";
    }

}


setInterval(function(){

    hambre -= 4;
    sueno -= 4;
    felicidad -= 4;
    higiene -= 4;
    salud -= 4;
    mundial -= 4; // También baja

    actualizarTodo();

}, 5000);

