const { Sequelize } = require('sequelize');

// ✅ Ahora usamos la variable de entorno en vez de escribir la URL directamente
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

// Test de conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a PostgreSQL');
  } catch (error) {
    console.error('❌ No se pudo conectar a PostgreSQL:', error);
  }
}

// ✅ Solo probamos si estamos en desarrollo
if (process.env.NODE_ENV !== 'production') {
  testConnection();
}

module.exports = sequelize;
