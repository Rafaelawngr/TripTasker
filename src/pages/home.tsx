import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import TripsCard from "../components/TripsCard";
import rj from "../assets/rio-de-janeiro.jpg"
import londres from "../assets/londres.jpg"
import india from "../assets/india.jpg"

export default function Home() {
    return (
        <div id="home">
            <PageTitle title="Home" />

            <NavBar />

            <main id="main">
                <Link to="/infotravel?location=rj" className="linkCard"><TripsCard src={rj} alt="rio de janeiro" destination="Rio de Janeiro, Brasil" /></Link>
                <Link to="/infotravel?location=londres" className="linkCard"><TripsCard src={londres} alt="londres" destination="Londres, Reino Unido" /></Link>
                <Link to="/infotravel?location=india" className="linkCard"><TripsCard src={india} alt="india" destination="Agra, India" /></Link>
            </main>
        </div>
    )
}