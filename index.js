require('dotenv').config(); // ✅ Cargar variables del .env
const express = require('express');
const sequelize = require('./src/config/database'); // ✅ conexión a la DB
const vacunoRoutes = require('./src/routes/vacuno.routes');
const pesajeRoutes = require('./src/routes/pesaje.routes');


const app = express();

// Middleware para leer JSON
app.use(express.json());

app.use('/vacunos', vacunoRoutes); //primero inicializar express y luego leer el json para poder usar las rutas
app.use('/pesajes', pesajeRoutes);
// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ Servidor funcionando correctamente');
});

// Sincronizar modelos con la base de datos y luego levantar servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar con la base de datos:', error);
  });

  