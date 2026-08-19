import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes';
import { connectRedis } from './redis';

const app = express();
app.use(cors());
app.use(express.json());

// Usar las rutas de tareas
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola, el backend funciona!');
});

const PORT = process.env.PORT || 3000;

// Inicializamos la conexión a Redis antes de encender el servidor Express
const startServer = async () => {
  try {
    await connectRedis();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor debido a Redis:', error);
  }
};

startServer();