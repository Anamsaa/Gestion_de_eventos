//MICHAEL
                    /*
            OBJETO MATH
            Función: Lógica de creación del token o numero random de un código promocional
        */
            function generarTokenCodigo(){
                return Math.floor(Math.random()*9);
            }
    
    
            /*
                OBJETO ARRAY
            */
            function buscarCodigo(listaCodigos,codigoInput){
                return listaCodigos.find(item => item.codigo === codigoBuscado);
            }
            
            /*
            
                OBJETO NUMBER
                Función: Sacar el porcentaje que aplicaria un código promocional.
                Entrada: Referencia del codigo generado.
            */
            function porcentajeCodigo(codigo){
                return Number(codigo.split('-').pop())
            }
            
            /*
                OBJETO STRING
                Función: Generar el código promocional basandonos en
                1 - Texto introductorio Ej "G2"
                2 - El porcentaje que deseamos aplicarle
                3 - El token el cuál se generara por defecto, no hay que llenar esto.
                4 - La duración del codigo en días.
            */
            function generarCodigo(preText, porcentaje, fechaCodigo, díasCodigo, token = generarTokenCodigo()){
                let fecha = generarDuracionCodigo(fechaCodigo,díasCodigo);
                return preText.concat(token) +"-"+ fecha + "-" + porcentaje;
            }
            
            /*
                OBJETO DATE
            */
            function generarDuracionCodigo(fechaInicio, duracionDias) { //SINTAX FECHA EJ: 2000-01-12   AÑO MES DÍA, LUEGO 
                const fecha = new Date(fechaInicio);
                fecha.setDate(fecha.getDate() + duracionDias);
                return fecha.toISOString().split('T')[0]; //RESULTADO DIAS
            }
            
            /*
                PRUEBAS
            */
            //PRUEBA GUARDANDO CODIGO GENERADO
            
            let codigo = generarCodigo("G2",24,"2024-02-12", 4);
            alert("CODIGO: " + codigo);
            //MOSTRANDO EL PORCENTAJE DE ESE CODIGO
            alert(porcentajeCodigo(codigo));
        
            //BASE
    
            //EL ARRAY CON LOS CODIGOS QUE UNO QUIERA
            const listaCodigos = [];
            const listaFechaCodigos = [];
            listaCodigos.push(generarCodigo("G2",24,"2024-02-12", 4));
            listaFechaCodigos.push("2024-02-12");
            alert(listaCodigos[0]);
            alert(listaFechaCodigos[0])
            //PILLANDO EL VALOR INTRODUCIDO
            let codigoInput = document.getElementById("codigo").textContent = 2;
    
            //PILLANDO LA FECHA DE HOY
            let fechaHoy = new Date().toISOString().split('T')[0];
    
            alert(buscarCodigo(listaCodigos,listaCodigos["codigo"]));
    
            //AVISO DE CODIGO INVALIDO O ENTRA A DESCONTAR
            // if(buscarCodigo(listaCodigos,listaCodigos[0])==-1){
            //     alert("CODIGO INVÁLIDO. NO APLICANDO DESCUENTO")
            // } else if(fechaHoy > listaCodigos[buscarCodigo(listaCodigos,listaCodigos[0])].split("-")){
            // }
    
            alert(listaCodigos[0]);
            alert(fechaHoy);