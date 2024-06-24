import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import logo from "../assets/triptasker-search.png";
import { listaDestinos } from "../components/Data"

export default function NewTravel() {

    return (
        <div id="newTravel">

            <PageTitle title="Nova viagem" />

            <NavBar />

            <form className="formContainer">

                <img className="logo" src={logo} alt="" />

                <label className="formLabel">
                    Destino
                    <Dropdown options={listaDestinos} />
                </label>

                <label className="formLabel">
                    Número de passageiros
                    <input className="formInput" type="text" placeholder="3" />
                </label>

                <label className="formLabel">
                    Data de ida
                    <input className="dateInput" type="date" />
                </label>

                <label className="formLabel">
                    Data de volta
                    <input className="dateInput" type="date" />
                </label>

                <div className="buttonContainer">
                    <Link to="/home"><button className="cancelButton">Voltar</button></Link>
                    <Link to="/home"><button type="button" className="addTravelButton">Adicionar</button></Link>
                </div>
            </form>
        </div>
    )
}