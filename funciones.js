const conciertos = []; 

// Registrar Evento 
function registrarEvento() {

    let evento = document.getElementById('evento').value,
        artista = document.getElementById('artista').value,
        fecha = document.getElementById('fecha').value,
        aforo = document.getElementById('aforo').value,
        temporada = document.getElementById('temporada').value,
        sala = document.getElementById('sala').value,
        precio = document.getElementById('precio').value;
        gastos = document.getElementById('gastos_g').value, 
        cache = document.getElementById('cache').value;

    // Creamos un objeto de tipo concierto
    const concierto = {
        id: generarIDconcierto(),
        evento, 
        artista, 
        fecha,
        precio: calcularPrecio(cache, gastos, aforo),
        sala
    };
    conciertos.push(concierto);
    agregarConcierto();
    document.getElementById("registro-form").reset();
}

function agregarConcierto() {
    const listaConciertos = document.getElementById("lista-conciertos");
    listaConciertos.innerHTML = ""; 


    // Hacemos un for-each del array de conciertos
    conciertos.forEach(concierto => {
        // Crear un elemento div, donde se almacena la info. por cada concierto registrado que tenga el array
        let conciertoCont = document.createElement("div");
        conciertoCont.classList.add("concierto_reg");

        conciertoCont.innerHTML = `
            <p>Evento: ${concierto.evento}</p>
            <p>Artista: ${concierto.artista}</p>
            <p>Fecha: ${concierto.fecha}</p>
            <p>Aforo: ${concierto.aforo}</p>
            <p>Precio: ${concierto.precio}</p>
            <p>ID: ${concierto.id}</p>
        `; 

        listaConciertos.appendChild(conciertoCont);
    });
}


function eliminarConcierto() {

}


// Generar ID de concierto

function generarIDConcierto() {

    let aforo = document.getElementById('aforo').value,
        gastos = document.getElementById('gastos_g').value, 
        cache = document.getElementById('cache').value;

    let precioBase = (parseFloat(cache) + parseFloat(gastos)) / aforo;

    let fecha = new Date(document.getElementById('fecha').value); 
    let dias = fecha / (1000 * 60 * 60 * 24); //pasamos a dias
    
    let random1 = Number.parseInt(Math.random()* precioBase); //Hacemos un numero random desde el precio base
    let random2 = Number.parseInt(Math.random()*dias);  //Hacemos un numero random desde los dias de la fecha de concierto
    
    let id = Math.abs(random2-random1);     // Usamos Math.abs para que sea siempre positivo  y restamos los dos valores y sacamos la ID unica
    return id;
}

function calcularPrecio(cache, gastos, aforo) {
    
    capMax = 0;

    //El precio será evaluado en función de la capacidad de cada sala. 
    switch (sala) {
        case 1: 
            capMax = 250; 
            if (aforo > capMax){
                alert("La sala 1 tiene una capacidad máxima de hasta 250 invitados");
            }
            break; 
        case 2: 
            capMax = 300; 
            if (aforo > capMax){
                alert("La sala 2 tiene una capacidad máxima de hasta 300 invitados");
            }
            break; 
        case 3: 
            capMax = 400; 
            if (aforo > capMax){
                alert("La sala 3 tiene una capacidad máxima de hasta 400 invitados");
            }
            break; 
        case 4: 
            capMax = 500;
            if (aforo > capMax){
                alert("La sala 4 tiene una capacidad máxima de hasta 500 invitados");
            }
            break; 
        default : 
            alert("Debe ingresar un valor de sala adeacuado:" + "\n" +
                "1" + "\n" +
                "2" + "\n" +
                "3" + "\n" +
                "4" + "\n");
    }

    //Comprobar que el número de asistentes se ajusta a la sala: 
    let precioBase = (parseFloat(cache) + parseFloat(gastos)) / aforo;
    //Redondear el precio base 
    return Math.round(precioBase * 100)/100; 
}


function recordarEvento() {
    

}


function darEstilo(){

    let nombreEvento = document.getElementById('evento'); 


}

function validarTickets() {

}