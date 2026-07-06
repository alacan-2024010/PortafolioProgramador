import dotenv from 'dotenv';
import { initApp } from './configs/app.js';   
import { dbConnection } from './configs/database.js';

dotenv.config();  

const app = initApp();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await dbConnection();

  app.listen(PORT, () => {
    console.log(`Mi Portafolio API corriendo en puerto ${PORT}`);
  });
};

startServer();