import { Router } from 'express';
import redisClient from '../redis';

const router = Router();
const REDIS_KEY = 'todos';

// Obtener todas las tareas desde Redis
router.get('/', async (req, res) => {
  try {
    const data = await redisClient.get(REDIS_KEY);
    const todos = data ? JSON.parse(data) : [];
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Crear una nueva tarea y guardarla en Redis
router.post('/', async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  try {
    // 1. Obtenemos las tareas actuales
    const data = await redisClient.get(REDIS_KEY);
    const todos = data ? JSON.parse(data) : [];

    // 2. Creamos la nueva tarea
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false
    };

    // 3. Guardamos en el arreglo y actualizamos en Redis
    todos.push(newTodo);
    await redisClient.set(REDIS_KEY, JSON.stringify(todos));

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la tarea' });
  }
});

export default router;