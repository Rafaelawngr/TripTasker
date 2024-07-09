import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import TripsCard from "../components/TripsCard";
import axios from "axios";

const baseUrl = "http://localhost:5145";

interface Trip {
  location: string;
  image: string;
}

export default function Home() {
  const [userTrips, setUserTrips] = useState<Trip[]>([]);
  const [newTripLocation, setNewTripLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserTrips() {
      try {
        const userId = getUserId();
        if (!userId) {
          navigate("/");
          return;
        }

        const response = await axios.get<Trip[]>(`${baseUrl}/api/Trip/${userId}`);
        setUserTrips(response.data);
      } catch (error) {
        console.error('Erro ao obter viagens do usuário:', error);
      }
    }

    fetchUserTrips();
  }, [navigate]);

  const getUserId = () => {
    return "123"; 
  };

  const handleCreateTrip = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userId = "123"; 
      const newTrip: Trip = {
        location: newTripLocation,
        image: "",
      };

      const response = await axios.post<Trip>(
        `${baseUrl}/api/Trip/${userId}`,
        newTrip
      );
      console.log("Viagem criada:", response.data);

      setUserTrips((prevTrips) => [...prevTrips, response.data]);
      setNewTripLocation("");
    } catch (error) {
      console.error('Erro ao criar viagem:', error);
    }
  };

  return (
    <div id="home">
      <PageTitle title="Home" />
      <NavBar />

      <main id="main">
        {userTrips.length === 0 ? (
          <p>Você ainda não possui viagens cadastradas.</p>
        ) : (
          userTrips.map((trip, index) => (
            <Link
              key={index}
              to={`/infotravel?location=${trip.location}`}
              className="linkCard"
            >
              <TripsCard
                src={trip.image}
                alt={trip.location}
                destination={trip.location}
              />
            </Link>
          ))
        )}

        <form className="formContainer" onSubmit={handleCreateTrip}>
          <label className="formLabel">
            Para onde vamos?
            <input
              className="formInput"
              type="text"
              placeholder="Digite o local da viagem"
              value={newTripLocation}
              onChange={(e) => setNewTripLocation(e.target.value)}
              required
            />
          </label>

          <div className="buttonContainer">
            <button type="submit" className="loginButton">
              Criar Viagem
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
