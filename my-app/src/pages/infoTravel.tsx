import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import axios from "axios";

const baseUrl = "http://localhost:5145";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface Task {
  name: string;
  date: string;
  status: string;
}

export default function InfoTravel() {
  const query = useQuery();
  const tripId = query.get("tripId");
  const [tripTitle, setTripTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("a fazer");

  useEffect(() => {
    async function fetchTrip() {
      try {
        const response = await axios.get(`${baseUrl}/api/Trip/${tripId}`);
        setTripTitle(response.data.title);
      } catch (error) {
        console.error("Erro ao obter detalhes da viagem:", error);
      }
    }

    async function fetchTasks() {
      try {
        const response = await axios.get(`${baseUrl}/api/Trip/${tripId}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Erro ao obter tarefas da viagem:", error);
      }
    }

    fetchTrip();
    fetchTasks();
  }, [tripId]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newTask: Task = {
        name: newTaskName,
        date: newTaskDate,
        status: newTaskStatus,
      };

      const response = await axios.post(
        `${baseUrl}/api/Trip/${tripId}/tasks`,
        newTask
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);

      setNewTaskName("");
      setNewTaskDate("");
      setNewTaskStatus("a fazer");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <div id="infoTravel">
      <NavBar />
      <form className="infoContainer">
        <PageTitle title={tripTitle} />
        <h1>{tripTitle}</h1>

        <div className="todoList">
          <h4>Tarefas:</h4>
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              placeholder="Nome da tarefa"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              required
            />
            <input
              type="date"
              value={newTaskDate}
              onChange={(e) => setNewTaskDate(e.target.value)}
              required
            />
            <select
              value={newTaskStatus}
              onChange={(e) => setNewTaskStatus(e.target.value)}
              required
            >
              <option value="a fazer">A fazer</option>
              <option value="fazendo">Fazendo</option>
              <option value="feito">Feito</option>
            </select>
            <button type="submit">Adicionar Tarefa</button>
          </form>

          {tasks.map((task, index) => (
            <div key={index} className="taskItem">
              <p>
                <strong>Nome:</strong> {task.name}
              </p>
              <p>
                <strong>Data:</strong> {task.date}
              </p>
              <p>
                <strong>Status:</strong> {task.status}
              </p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
