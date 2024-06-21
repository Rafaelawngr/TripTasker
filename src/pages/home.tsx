import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import TripsCard from "../components/TripsCard";
import rj from "../assets/rio-de-janeiro.jpg"
import londres from "../assets/londres.jpg"
import india from "../assets/india.jpg"

export default function Home() {
    return(
        <div id="home">
            <PageTitle title="Home" />

            <NavBar />

            <main>
                <TripsCard src={rj} alt="rio de janeiro" destination="Rio de Janeiro"/>
                <TripsCard src={londres} alt="londres" destination="Londres"/>
                <TripsCard src={india} alt="india" destination="India"/>
            </main>
        </div>
    )
}