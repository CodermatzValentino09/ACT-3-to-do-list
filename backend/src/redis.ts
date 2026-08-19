import { createClient } from 'redis';

// Creamos el cliente de Redis apuntando al servicio de Docker (o localhost)
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Error en Redis Client', err));

// Función para conectar
export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log('Conectado a Redis exitosamente');
  }
};

export default redisClient;