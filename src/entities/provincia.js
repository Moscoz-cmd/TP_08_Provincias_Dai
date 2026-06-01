export default class Provincia {
    constructor(id, name, full_name, latitude, longitude, display_order) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.display_order = display_order;
    }

    static fromRow(row) {
        return new Provincia(
            row.id,
            row.name,
            row.full_name,
            row.latitude,
            row.longitude,
            row.display_order
        );
    }

}
