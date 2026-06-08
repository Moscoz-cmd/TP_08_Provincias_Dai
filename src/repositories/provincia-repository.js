// ============================================
// REPOSITORY - Habla directo con la base de datos
// ============================================

import pkg from 'pg';
const { Client } = pkg;
import DBConfig from '../configs/db-config.js';

export default class ProvinciaRepository {

    // Trae todas las provincias
    getAllAsync = async () => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query('SELECT * FROM provinces ORDER BY id');
            return result.rows;
        } catch (error) {
            console.error(error);
            return [];
        } finally {
            await client.end();
        }
    }

    // Trae una provincia por id
    getByIdAsync = async (id) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'SELECT * FROM provinces WHERE id = $1';
            const result = await client.query(sql, [id]);
            return result.rows.length > 0 ? result.rows[0] : null;
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            await client.end();
        }
    }

    // Inserta una provincia nueva
    insertAsync = async (provincia) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `
                INSERT INTO provinces (name, full_name, latitude, longitude, display_order)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `;
            const values = [
                provincia.name,
                provincia.full_name,
                provincia.latitude,
                provincia.longitude,
                provincia.display_order
            ];
            const result = await client.query(sql, values);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            await client.end();
        }
    }

    // Actualiza una provincia existente
    updateAsync = async (provincia) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `
                UPDATE provinces
                SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5
                WHERE id = $6
                RETURNING *
            `;
            const values = [
                provincia.name,
                provincia.full_name,
                provincia.latitude,
                provincia.longitude,
                provincia.display_order,
                provincia.id
            ];
            const result = await client.query(sql, values);
            return result.rows.length > 0 ? result.rows[0] : null;
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            await client.end();
        }
    }

    // Elimina una provincia por id
    deleteAsync = async (id) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'DELETE FROM provinces WHERE id = $1 RETURNING *';
            const result = await client.query(sql, [id]);
            return result.rows.length > 0 ? result.rows[0] : null;
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            await client.end();
        }
    }
}