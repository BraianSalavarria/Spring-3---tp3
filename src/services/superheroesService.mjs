import superHeroRepository from '../repository/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

export async function insertarSuperheroe(superheroe) {
    return await superHeroRepository.insertar(superheroe);
}

export async function actualizarSuperheroe(id, superheroe) {
    return await superHeroRepository.actualizar(id, superheroe);
}

export async function eliminarSuperheroe(id) {
    return await superHeroRepository.eliminarById(id);
}

export async function eliminarSuperheroePorNombre(name) {
    return await superHeroRepository.eliminarByName(name);
}   