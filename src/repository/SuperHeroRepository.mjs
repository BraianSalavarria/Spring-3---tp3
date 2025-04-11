import superHero from '../models/SuperHero.mjs';
import SuperHero from '../models/SuperHero.mjs'
import  IRepository from './IRepository.mjs'

 class SuperHeroRepository extends IRepository{

    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        const result = await SuperHero.find({ [atributo]: valor});
        return result;
    }

    async obtenerMayoresDe30(){
        const result = await SuperHero.find({
            edad: {$gt: 30},
            planetaOrigen:"Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2] } 
        });
        return result;
    }

    async insertar(superheroe){
        const nuevoSuperheroe = await superHero.create(superheroe);
        return nuevoSuperheroe;
    }

    async actualizar(id, superheroe){
        const superheroeActualizado = await superHero.findByIdAndUpdate(id, superheroe, {new: true});
        return superheroeActualizado;
    }

    async eliminarById(id){
        const superheroeEliminado = await superHero.findByIdAndDelete(id);
        return superheroeEliminado;
    }

    async eliminarByName(name){
        const superheroeEliminado = await superHero.findOneAndDelete({ nombreReal: name });
        return superheroeEliminado;
    }
}

export default new SuperHeroRepository();