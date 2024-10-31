

// Generar ID de concierto
function generarIDConcierto() {

            const botonRegistrar = document.getElementById("registrar");
        botonRegistrar.addEventListener("submit", (event) => {

            event.preventDefault();

        })

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

console.log(generarIDConcierto);




