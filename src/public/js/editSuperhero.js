
document.getElementById('editsuperhero').addEventListener('submit',async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data ={}

    formData.forEach( (values, key) =>{
            if( key === 'poderes'){
                data[key] = values.split(',').map( poder => poder.trim());
        }else{
                if( key === 'aliados'){
                    data[key] = values.split(',').map( aliado => aliado.trim());
        }else{
                if(key === 'enemigos'){
                    data[key] = values.split(',').map( enemigo => enemigo.trim());
        }else{
                if(key === 'edad'){
                    data[key] =parseInt(values);
        }else{
                    data[key] = values;

                    }
                }
            }
        }
    });
    try{
            console.log(JSON.stringify(data));
            
          
            const response = await fetch(`/api/heroes/${data.id}/editar`,{
                method:'PUT',
                headers: {
                        'Content-Type': 'application/json'
                        },
                body: JSON.stringify(data)      
            });

            if(response.ok){
               const message = await response.json();
               alert(message.mensaje);
               window.location.assign('/api/heroes')
            
            }else{
                    const errorData = await response.json();
                    const { status, message, errors } = errorData;

                    if (errors && errors.length > 0) {
                        const errorMessages = errors.map(err => `• ${err.message}`).join('\n');
                        alert(`Errores de validación:\n${errorMessages}`);
                    } else {
                        alert(`Error ${status || response.status}: ${message || 'Error desconocido'}`);
                    }
                
                 }


    }catch(error){
            alert(`Error al enviar la solicitud: ${error}`)
    }
    
   
});

