import express from 'express';
 import {obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesCotroller,  buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller, agregarSuperheroeControlloer, 
    editarSuperheroeController,eliminarSuperheroeController,eliminarSuperheroePorNombreController,
    addSuperheroRender,panelDeSuperheroRender,editarSuperheroRender
 } from '../controllers/superheroesController.mjs'

import { handleValidationErrors } from '../routes/errorMiddleware.mjs';
import { nombreRealValidationRules,nombreSuperheroeValidationRules, edadValidationRules,poderesValidationRules,aliadosValidationRules,enemigosValidationRules } from '../routes/validationRoules.mjs';
 const router = express.Router();

//rutas esticas
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes',obtenerTodosLosSuperheroesCotroller);


//nuevas rutas esticas tp 3
router.get('/heroes/panelSuperheroes',panelDeSuperheroRender);
router.get('/heroes/agregar',addSuperheroRender);
router.get('/heroes/:id/editar',editarSuperheroRender);
router.post('/heroes/agregar', nombreRealValidationRules(),nombreSuperheroeValidationRules(),poderesValidationRules(),aliadosValidationRules(),enemigosValidationRules(),edadValidationRules(),handleValidationErrors,agregarSuperheroeControlloer);


//rutas dinamicas
 router.get('/heroes/:id', obtenerSuperheroePorIdController);
 router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
 router.delete('/heroes/borrar/nombre/:nombre',eliminarSuperheroePorNombreController);

 //rutas dinamicas tp3
 router.delete('/heroes/:id',eliminarSuperheroeController);
 router.put('/heroes/:id/editar',nombreRealValidationRules(),nombreSuperheroeValidationRules(),poderesValidationRules(),aliadosValidationRules(),enemigosValidationRules(),edadValidationRules(),handleValidationErrors,editarSuperheroeController);






 export default router;
