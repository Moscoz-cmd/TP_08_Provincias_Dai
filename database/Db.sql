BEGIN;

-- Create table (public schema)
CREATE TABLE IF NOT EXISTS public.provincias (
  id              INT PRIMARY KEY,
  name            VARCHAR(255) NOT NULL,
  full_name       VARCHAR(255) NOT NULL,
  latitude        FLOAT,
  longitude       FLOAT,
  display_order   INT
);

-- Seed data
INSERT INTO public.provincias (id, name, full_name, latitude, longitude, display_order) VALUES
(1,  'Buenos Aires',  'Provincia de Buenos Aires',       -36.6769,  -60.5588,  1),
(2,  'Córdoba',       'Provincia de Córdoba',            -31.4135,  -64.1811,  2),
(3,  'Santa Fe',      'Provincia de Santa Fe',           -30.7069,  -60.9498,  3),
(4,  'Mendoza',       'Provincia de Mendoza',            -32.8908,  -68.8272,  4),
(5,  'Tucumán',       'Provincia de Tucumán',            -26.8083,  -65.2176,  5),
(6,  'Salta',         'Provincia de Salta',              -24.7859,  -65.4116,  6),
(7,  'Misiones',      'Provincia de Misiones',           -27.4269,  -55.9458,  7),
(8,  'Chaco',         'Provincia de Chaco',              -27.4513,  -59.0731,  8),
(9,  'Entre Ríos',    'Provincia de Entre Ríos',         -31.7746,  -60.4956,  9),
(10, 'Corrientes',    'Provincia de Corrientes',        -27.4806,  -58.8341,  10)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  full_name = EXCLUDED.full_name,
  latitude = EXCLUDED.latitude,
  longitude = EXCLUDED.longitude,
  display_order = EXCLUDED.display_order;

COMMIT;
--creada en supabase