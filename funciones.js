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



//FALTA POR HACER
function calcularDivisionIngresos(){
    let cacheArtista = document.getElementById("cache").value
    let porcentajeArtista = document.getElementById("porcentajeArtista").value
   
    let beneficioArtista= Math.round((ingresoTotal*porcentajeArtista)/100); //sacamos los beneficios del artita ingresostotales*porcentaje artista/100 primero realizamos el calculo luego redondeamos
}




