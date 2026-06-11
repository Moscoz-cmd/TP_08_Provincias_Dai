import sql from '../configs/db-config.js';

export default class ProvinciaRepository {

    getAllAsync = async () => {
        return await sql`SELECT * FROM provinces ORDER BY id`;
    }

    getByIdAsync = async (id) => {
        const rows = await sql`SELECT * FROM provinces WHERE id = ${id}`;
        return rows.length > 0 ? rows[0] : null;
    }

    insertAsync = async (provincia) => {
        const rows = await sql`
            INSERT INTO provinces (name, full_name, latitude, longitude, display_order)
            VALUES (${provincia.name}, ${provincia.full_name}, ${provincia.latitude}, ${provincia.longitude}, ${provincia.display_order})
            RETURNING *
        `;
        return rows[0];
    }

    updateAsync = async (provincia) => {
        const rows = await sql`
            UPDATE provinces
            SET name = ${provincia.name}, full_name = ${provincia.full_name},
                latitude = ${provincia.latitude}, longitude = ${provincia.longitude},
                display_order = ${provincia.display_order}
            WHERE id = ${provincia.id}
            RETURNING *
        `;
        return rows.length > 0 ? rows[0] : null;
    }

    deleteAsync = async (id) => {
        const rows = await sql`DELETE FROM provinces WHERE id = ${id} RETURNING *`;
        return rows.length > 0 ? rows[0] : null;
    }
}