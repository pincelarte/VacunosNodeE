// Se importa la conexión que creada en config/database.js 

const sequelize = require('./src/config/database');

// Función para probar la conexión a la base de datos
async function main() {
  try {
    await sequelize.authenticate();
    console.log('✅ La base de datos está conectada correctamente');
  } catch (error) {
    console.error('❌ Error al conectar la base de datos:', error);
  }
}

main();
