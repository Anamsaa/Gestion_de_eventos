










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



