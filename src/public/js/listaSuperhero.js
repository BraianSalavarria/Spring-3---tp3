async function eliminarSuperheroe(id){
    try{
    const confirmacion = confirm('¿Esta seguro que desea eliminar el Superheroe?')
    
    if(confirmacion){
        const response = await fetch(`/api/heroes/${id}`,{
            method:'DELETE',
        });
        
        if(response.ok){
            const message = await response.json();
            alert(message.mensaje)
            window.location.reload();
            
        }else{
            const error = await response.json();
            alert(`${error.message}\n ${error.error}`)
        }
    }
    }catch(error){
        alert(`Error al enviar la solicitud: ${error}`)
    }

}

async function editarSuperheroe(id){
    window.location.assign(`/api/heroes/${id}/editar`)
}