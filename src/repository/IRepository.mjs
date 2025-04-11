class IRepository{

    obtenerPorId(id){
        throw new Error('Motodo obtenerPorId no implenetado');
    }

    obtenerTodos(){
        throw new Error('metodo obtenerTodos no implementado');
    }

    buscarPorAtributo(){
        throw new Error('metodo buscarPorAtributo no implementado');
    }

    obtenerMayoresDe30(){
        throw new Error('metodo obyenerMayoresDe30 no implementado');
    }

    insertar(){
        throw new Error('metodo insertar no implementado');
    }

    actualizar(){
        throw new Error('metodo actualizar no implementado');
    }
    
    eliminarById(){
        throw new Error('metodo eliminarById no implementado');
    }

    eliminarByName(){
        throw new Error('metodo eliminarByName no implementado');
    }
}
export default IRepository;