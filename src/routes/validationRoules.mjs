import { body } from "express-validator";

export const nombreSuperheroeValidationRules = () => [
    body('nombreSuperHeroe')
        .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres.')
        .trim()
        .escape()
];

export const nombreRealValidationRules = () => [
    body('nombreReal')
        .notEmpty().withMessage('El nombre real del superhéroe es obligatorio.')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres.')
        .trim()
        .escape()
];

export const edadValidationRules = () => [
    body('edad')
        .notEmpty().withMessage('La edad del superhéroe es obligatoria.')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número entero mayor o igual a 0.')
];

export const poderesValidationRules = () => [
    body('poderes')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage('Cada poder debe contener solo letras')
        .exists().withMessage('Los poderes del superhéroe son obligatorios.')
        .isArray({ min: 1 }).withMessage('Los poderes deben ser un arreglo con al menos un elemento.'),
  
    body('poderes.*')
        .isString().withMessage('Cada poder debe ser una cadena de texto.')
        .trim()
        .escape()
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres.')
];

export const aliadosValidationRules = () => [
    body('aliados')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage('Cada aliado debe contener solo letras')
        .exists().withMessage('Los aliados del superhéroe son obligatorios.')
        .isArray({ min: 1 }).withMessage('Los aliados deben ser un arreglo con al menos un elemento.'),
  
    body('aliados.*')
        .isString().withMessage('Cada aliado debe ser una cadena de texto.')
        .trim()
        .escape()
        .isLength({ min: 3, max: 60 }).withMessage('Cada aliado debe tener entre 3 y 60 caracteres.')
];

export const enemigosValidationRules = () => [
    body('enemigos')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage('Cada enemigo debe contener solo letras')
        .exists().withMessage('Los enemigos del superhéroe son obligatorios.')
        .isArray({ min: 1 }).withMessage('Los enemigos deben ser un arreglo con al menos un elemento.'),
  
    body('enemigos.*')
        .isString().withMessage('Cada enemigo debe ser una cadena de texto.')
        .trim()
        .escape()
        .isLength({ min: 3, max: 60 }).withMessage('Cada enemigo debe tener entre 3 y 60 caracteres.')
];