



import ProvinciaRepository from '../repositories/provincia-repository.js';
import { validateProvincia } from '../helpers/validaciones-helper.js';

export default class ProvinciaService {

    constructor() {
        this.repository = new ProvinciaRepository();
    }

    // Trae todas las provincias
    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }

    // Trae una provincia por id
    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id);
    }

    // Inserta una provincia nueva
    insertAsync = async (provincia) => {
        // 1. Valido los datos
        const errors = validateProvincia(provincia);
        if (errors.length > 0) {
            return { error: errors.join(", ") };
        }

        // 2. Si todo OK, inserto en la base de datos
        const data = await this.repository.insertAsync(provincia);
        return { data };
    }

    // Actualiza una provincia existente
    updateAsync = async (provincia) => {
        // 1. Valido los datos
        const errors = validateProvincia(provincia);
        if (errors.length > 0) {
            return { error: errors.join(", ") };
        }

        // 2. Verifico que exista
        const existe = await this.repository.getByIdAsync(provincia.id);
        if (!existe) {
            return { notFound: true };
        }

        // 3. Si todo OK, actualizo en la base de datos
        const data = await this.repository.updateAsync(provincia);
        return { data };
    }

    // Elimina una provincia por id
    deleteAsync = async (id) => {
        // 1. Verifico que exista
        const existe = await this.repository.getByIdAsync(id);
        if (!existe) {
            return { notFound: true };
        }

        // 2. Si existe, la elimino
        const data = await this.repository.deleteAsync(id);
        return { data };
    }
}