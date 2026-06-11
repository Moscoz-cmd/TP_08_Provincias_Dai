const validateProvince = (province) => {
 
    const errors = [];
 
    // Validar NAME
    if (!province.name) {
        errors.push("El campo 'name' es obligatorio.");
    } else if (province.name.trim().length < 3) {
        errors.push("El campo 'name' debe tener al menos 3 caracteres.");
    }
 
    // Validar FULL_NAME
    if (!province.full_name) {
        errors.push("El campo 'full_name' es obligatorio.");
    } else if (province.full_name.trim().length < 3) {
        errors.push("El campo 'full_name' debe tener al menos 3 caracteres.");
    }
 
    // Validar LATITUDE
    if (province.latitude === undefined || province.latitude === null) {
        errors.push("El campo 'latitude' es obligatorio.");
    } else if (isNaN(province.latitude)) {
        errors.push("El campo 'latitude' debe ser un número.");
    }
 
    // Validar LONGITUDE
    if (province.longitude === undefined || province.longitude === null) {
        errors.push("El campo 'longitude' es obligatorio.");
    } else if (isNaN(province.longitude)) {
        errors.push("El campo 'longitude' debe ser un número.");
    }
 
    return errors; 
}
 
export { validateProvince as validateProvincia };
 