

const users = [
  {
    id: 1,
    nombre: 'Juan',
    email: 'juan@example.com',
    contrasena: 'password123',
    edad: 30,
    apellido: 'Pérez',
    fechaRegistro: '2023-01-01',
    direccion: '123 Calle Falsa'
  },
  {
    id: 2,
    nombre: 'Ana',
    email: 'ana@example.com',
    contrasena: 'password456',
    edad: 25,
    apellido: 'López',
    fechaRegistro: '2023-02-01',
    direccion: '456 Calle Verdadera'
  },

];
export default users

export async function getProductBynombre(nombre) {
  const query = `/nombre/?nombre=${nombre}`

  try {
    const response = await fetch("http://localhost:4030/api/products/".concat(query));
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}


