<<<<<<< HEAD
=======
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

//Array para almacenar los conciertos
const conciertos = [];

// Registrar Evento 
function registrarEvento(event) {

    event.preventDefault();

    //.toUpperCase para convertir las letras a mayúsculas
    let evento = document.getElementById('evento').value.toUpperCase(),
        artista = document.getElementById('artista').value,
        fecha = document.getElementById('fecha').value,
        aforo = document.getElementById('aforo').value,
        temporada = document.getElementById('temporada').value,
        sala = parseInt(document.getElementById('sala').value);

    // Creamos un objeto de tipo concierto
    const concierto = {
        id: generarIDConcierto(),
        evento, 
        artista: validarNombre(),//Funcion Tomeu
        fecha,
        aforo,
        temporada,
        precio: calcularPrecio(),
        sala,
        DiasAntelacion : calcularDiasAntelacion() //Funcion Tomeu

        
    };

    conciertos.push(concierto);
    agregarConcierto();
    console.log(conciertos);
    document.getElementById("registro-form").reset();
}

function agregarConcierto() {
    const listaConciertos = document.getElementById("lista-conciertos");
    listaConciertos.innerHTML = ""; 
>>>>>>> origin/main



<<<<<<< HEAD
=======
        conciertoCont.innerHTML = `
            <p>Evento: ${concierto.evento}</p>
            <p>Artista: ${concierto.artista}</p>
            <p>Fecha: ${concierto.fecha}</p>
            <p>Fecha: ${concierto.temporada}</p>
            <p>Aforo: ${concierto.aforo}</p>
            <p>Precio: ${concierto.precio}</p>
            <p>ID: ${concierto.id}</p>
            <p>Dias Antelacion: ${concierto.DiasAntelacion}</p>
            <button class="eliminar" onclick="eliminarConcierto(${concierto.id})">Eliminar</button>
        `; 
>>>>>>> origin/main








// EN PRUEBASSS
function verificarSala() {

    document.getElementById('sala-error').innerHTML = ""; 
    capMax = 0;

    //El precio será evaluado en función de la capacidad de cada sala. 
   
    switch (sala) {
        case 1: 
            capMax = 250; 
            if (aforo > capMax){
                document.getElementById('sala-error').innerHTML = "La sala 1 tiene una capacidad máxima de hasta 250 personas";
            }
            break; 
        case 2: 
            capMax = 300; 
            if (aforo > capMax){
                document.getElementById('sala-error').innerHTML = "La sala 2 tiene una capacidad máxima de hasta 300 personas";
            }
            break; 
        case 3: 
            capMax = 400; 
            if (aforo > capMax){
                document.getElementById('sala-error').innerHTML = "La sala 3 tiene una capacidad máxima de hasta 400 personas";
            }
            break; 
        case 4: 
            capMax = 500;
            if (aforo > capMax){
                document.getElementById('sala-error').innerHTML = "La sala 4 tiene una capacidad máxima de hasta 500 personas";
            }
            break; 
        default : 
            alert("Debe ingresar un valor de sala adeacuado:" + "\n" +
                "1" + "\n" +
                "2" + "\n" +
                "3" + "\n" +
                "4" + "\n");
            break;
    }
}



// FUNCIONES MANU


    /*: 
        Calcula el ingreso esperado multiplicando el 
        precio del ticket por el número de tickets vendidos.
    */

    /* 
        como el número de tickets depende de la reserva del cliente
        supondremos un número constante de tickets de 250
    */
    
        //Calcular Ingreso por Asistente
    
        function  calcularIngresoPorAsistente(ingresoTotal, asistentes) {
    
            const ingresoMedio = ingresoTotal/asistentes;
            
            return ingresoMedio.toFixed(2);
        }
    
        // necesito valor funcion calcularIngresosEsperados
    
        // calcularIngresoPorAsistente(ingresoTotal, evento.asistentesEvento)






// Funciones de Tomeu 

//funciona psobile mejora
function validarNombre(){
    
   
 let nombre = document.getElementById("artista").value //Obtenemos el id del formulario
 nombre = nombre.toLowerCase();; //convertimos el nombre del artista a minusculula
 
 for(let i =0; i<nombre.length ; i++){ //miramos si tenemos espacios y los reemplazamos 
    
   nombre = nombre.replace(" ", "");
   
}
   return nombre;
 


}



//funciona
function calcularDiasAntelacion(){
    let fechaEvento =  new Date(document.getElementById("fecha").value) //obtenemos la fecha del id
    let hoy = new Date(); // obtenemos la fecha actual
    let diferencia = fechaEvento-hoy; //calculamos la diferencia del evento y la actual(milisegundos)

    let diferenciaDias =  Math.ceil(diferencia / (1000 * 60 * 60 * 24)); // Convertimos de milisegundos a dias yredondeamos hacia arriba con math ceil

    if(diferencia<0){//si el concierto ya ha passado  lo dejamos a 0 
        diferenciaDias=0;
      
      }
   

    return  diferenciaDias ;
}

//FALTA POR HACER
function calcularDivisionIngresos(){
    let cacheArtista = document.getElementById("cache").value
    let porcentajeArtista = document.getElementById("porcentajeArtista").value
   
    let beneficioArtista= Math.round((ingresoTotal*porcentajeArtista)/100); //sacamos los beneficios del artita ingresostotales*porcentaje artista/100 primero realizamos el calculo luego redondeamos
}




