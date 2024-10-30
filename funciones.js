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


// Funciones de Manu 


function enviarFormulario() {
    
    const botonEnviarFormulario = document.getElementById("registrar");
    
    botonEnviarFormulario.addEventListener("submit", (event) => {

        event.preventDefault();
    })
    
    let evento = {

        nombreEvento:document.getElementById("evento").value,
        artistaEvento: document.getElementById("artista").value,
        fechaEvento:document.getElementById("fecha").value,
        // conversión a integer porque el value del input te viene como string
        asistentesEvento: parseInt(document.getElementById("aforo").value),
        // campo calculado
        temporadaEvento:"",
        salaEvento:  parseInt(document.getElementById("sala").value),
        cacheArtistaEvento:parseInt(document.getElementById("cache").value),
        gastosGestionEvento:parseInt(document.getElementById("gastos_g").value),
        // campo calculado
        importeTotalEvento: 0
    }


    // FUNCIONES MANU

    /*Asigna cada concierto a una temporada (primavera, verano, otoño, invierno) 
    para facilitar la programación y marketing.*/

    function determinarTemporada(fechaInput) {
        // Conversión String a Date, fecha viene como String del campo Fecha del Evento
        const fecha = typeof fechaInput === "string" ? new Date(fechaInput) : fechaInput;

        // Helper function to calculate days since the start of the year
        
        function diasInicioAño(fecha) {
            const comienzoAño = new Date(fecha.getFullYear(), 0, 1);
            const diferenciaTiempo = fecha - comienzoAño;
            return Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
        }

        // Days thresholds for each season based on 2023
        const año = fecha.getFullYear();
        const diasInicioPrimavera = diasInicioAño(new Date(año, 2, 20));  // March 20
        const diasFinPrimavera = diasInicioAño(new Date(año, 5, 20));     // June 20
        const diasInicioVerano = diasInicioAño(new Date(año, 5, 20));     // June 20
        const diasFinVerano = diasInicioAño(new Date(año, 8, 22));        // September 22
        const diasInicioOtoño = diasInicioAño(new Date(año, 8, 22));      // September 22
        const diasFinOtoño = diasInicioAño(new Date(año, 11, 21));        // December 21
        const diasInicioInvierno = diasInicioAño(new Date(año, 11, 21));  // December 21
        const diasTotales = diasInicioAño(fecha);

        // Determine season based on days passed since the start of the year
        let temporada = "";
        if (diasTotales >= diasInicioPrimavera && diasTotales < diasFinPrimavera) {
            temporada = "primavera";
        } else if (diasTotales >= diasInicioVerano && diasTotales < diasFinVerano) {
            temporada = "verano";
        } else if (diasTotales >= diasInicioOtoño && diasTotales < diasFinOtoño) {
            temporada = "otoño";
        } else {
            temporada = "invierno";
        }
        return temporada;
    }

    // objeto para guardar campos
    const temporada = determinarTemporada(evento.fechaEvento);
    const campoTemporada = document.getElementById("temporada");
    const campoImporteTotal = document.getElementById("importe");
    // asignamos valor temporada al campo temporada
    evento.temporadaEvento = temporada;
    campoTemporada.value = temporada;
    evento.importeTotalEvento = evento.cacheArtistaEvento + evento.gastosGestionEvento;
    campoImporteTotal.value = evento.importeTotalEvento;


    /*: 
        Calcula el ingreso esperado multiplicando el 
        precio del ticket por el número de tickets vendidos.
    */

    /* 
        como el número de tickets depende de la reserva del cliente
        supondremos un número constante de tickets de 250
    */

    let ticketsVendidos = 250;

    /*Calcular Ingresos Esperados: VERIFICAR CALCULO PRECIO DEL TICKET CON ANA*/
    
    function calcularIngresosEsperados(precioTicket, ticketsVendidos) {

        return precioTicket * ticketsVendidos;
    }

    //Crear Descripción del Evento:

    function crearDescripcionEvento(nombreConcierto, nombreArtista, fecha) {

        // función para convertir fecha a formato español, parámetro fecha tipo new Date()

        function formatoEspañolFecha(fecha) {
            return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
            }).format(fecha);
        }

        return (`Disfruta del Concierto ${nombreConcierto} de la mano de ${nombreArtista} el próximo ${formatoEspañolFecha(fecha)}`)
    }

    //Calcular Ingreso por Asistente

    function  calcularIngresoPorAsistente(ingresoTotal, asistentes) {

        const ingresoMedio = ingresoTotal/asistentes;
        
        return ingresoMedio.toFixed(2);
    }

    // necesito valor funcion calcularIngresosEsperados

    // calcularIngresoPorAsistente(ingresoTotal, evento.asistentesEvento)
}


// Funciones de Tomeu 

//(Objeto Math):  //redondeamos a dos decimales 
function calcularGestor(event){
    event.preventDefault();

    //funcion para calcularDivisionIngresos
    let ingresoTotal = document.getElementById("ingresoTotal").value
    let porcentajeArtista = document.getElementById("porcentajeArtista").value
    let nombre = document.getElementById("validarNombreArtista").value
    let beneficioArtista= Math.round((ingresoTotal*porcentajeArtista)/100); //sacamos los beneficios del artita ingresostotales*porcentaje artista/100 primero realizamos el calculo luego redondeamos
    
    document.getElementById("resultado").innerText="Los beneficios del artista "+nombre+ " son :  "+ beneficioArtista +" euros";
}

function calcularCliente(event){
    event.preventDefault();

 //funcion para validar nombre 

    let nombre = document.getElementById("nombre").value
    nombre = nombre.toLowerCase(); //convertimos el nombre del artista a minuscul
    nombre = nombre.trim();

    //funcion para generar ID

    let fecha = new Date(fechaConcierto); 
    let dias = fecha / (1000 * 60 * 60 * 24); //pasamos a dias

    let random1 = Number.parseInt(Math.random()*precioBase); //Hacemos un numero random desde el precio base
    let random2 = Number.parseInt(Math.random()*dias);  //Hacemos un numero random desde los dias de la fecha de concierto

    let id = Math.abs(random2-random1);     // Usamos Math.abs para que sea siempre positivo  y restamos los dos valores y sacamos la ID unica


//immprimir
document.getElementById("resultado").innerText="El nombre del artisa es " + nombre;
document.getElementById("resultado").innerText="Tu ID única es la : " + id;
}



function calcularDiasAntelacion(fechaConcierto, fechaVenta){
    let concierto = new Date(fechaConcierto);
    let venta = new Date(fechaVenta);

    let diferencia = concierto-venta; // nos dará la diferencia en milisegundos 

    let diferenciaDias = diferencia / (1000 * 60 * 60 * 24); // lo passamos a dias 

    return  "Para abrir la  compra de tickets faltan : "+diferenciaDias + " dias";
}
//console.log (calcularDiasAntelacion("2024-01-01" , "2023-01-01"));



