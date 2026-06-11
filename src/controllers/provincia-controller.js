import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProvinciaService from '../services/provincia-service.js';


const ProvinciaRouter = Router();
const service = new ProvinciaService();

ProvinciaRouter.get('/', async (req, res) => {
    try {
        const provincias = await service.getAllAsync();
        res.status(StatusCodes.OK).json(provincias);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error interno del servidor.');
    }
});

ProvinciaRouter.get('/:id', async (req, res) => {
    try {
        const provincia = await service.getByIdAsync(req.params.id);
        if (!provincia) {
            return res.status(StatusCodes.NOT_FOUND).send('Provincia no encontrada.');
        }
        res.status(StatusCodes.OK).json(provincia);
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error interno del servidor.');
    }
});

ProvinciaRouter.post('/', async (req, res) => {
    try {
        const result = await service.insertAsync(req.body);
        if (result.error) {
            return res.status(StatusCodes.BAD_REQUEST).send(result.error);
        }
        res.status(StatusCodes.CREATED).json(result.data);
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error interno del servidor.');
    }
});

ProvinciaRouter.put('/', async (req, res) => {
    try {
        const result = await service.updateAsync(req.body);
        if (result.error) {
            return res.status(StatusCodes.BAD_REQUEST).send(result.error);
        }
        if (result.notFound) {
            return res.status(StatusCodes.NOT_FOUND).send('Provincia no encontrada.');
        }
        res.status(StatusCodes.CREATED).json(result.data);
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error interno del servidor.');
    }
});

ProvinciaRouter.delete('/:id', async (req, res) => {
    try {
        const result = await service.deleteAsync(req.params.id);
        if (result.notFound) {
            return res.status(StatusCodes.NOT_FOUND).send('Provincia no encontrada.');
        }
        res.status(StatusCodes.OK).json(result.data);
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error interno del servidor.');
    }
});

export default ProvinciaRouter;
