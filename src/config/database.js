const { Sequelize } = require('sequelize');

// URL de conexión que guardé en Bitwarden
const sequelize = new Sequelize('postgresql://postgres:VKGWgBkomIfYnnIWIpXpzhSDDaxELmIC@trolley.proxy.rlwy.net:12424/railway', {
  dialect: 'postgres',
  logging: false, // Opcional: quita los logs de SQL en consola
});

//testeo de conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a PostgreSQL');
  } catch (error) {
    console.error('No se pudo conectar a PostgreSQL:', error);
  }
}

testConnection();

module.exports = sequelize;
