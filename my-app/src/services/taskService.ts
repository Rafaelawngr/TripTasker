import axios from 'axios';

const baseUrl = 'http://localhost:5145/TripTaskerApi'; 

async function getTasks(tripId: string) {
    try {
        const response = await axios.get(`${baseUrl}/api/Task/${tripId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter tarefas:', error);
        throw error;
    }
}

async function createTask(tripId: string, newTask: string) {
  try {
      const response = await axios.post(`${baseUrl}/api/Task/${tripId}`, newTask);
      return response.data;
  } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      throw error;
  }
}

async function updateTask(taskId: string, updatedTask: string) {
  try {
      const response = await axios.put(`${baseUrl}/api/Task/${taskId}`, updatedTask);
      return response.data;
  } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw error;
  }
}

async function deleteTask(taskId: string) {
  try {
      await axios.delete(`${baseUrl}/api/Task/${taskId}`);
      console.log('Tarefa deletada com sucesso.');
  } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      throw error;
  }
}

async function changeTaskStatus(taskId: string, newStatus: number) {
  try {
      const response = await axios.put(`${baseUrl}/api/Task/${taskId}/status`, null, {
          params: { newStatus } 
      });
      return response.data;
  } catch (error) {
      console.error('Erro ao alterar o status da tarefa:', error);
      throw error;
  }
}

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  changeTaskStatus
};

export default taskService;