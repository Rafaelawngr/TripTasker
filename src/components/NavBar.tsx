import { Link } from "react-router-dom";
import logo from "../assets/triptasker-logo.png";

export default function NavBar() {
    return (
        <nav id="NavBar">
            <img className="logo" src={logo} alt="logo triptasker" />

            <div className="navItemContainer">
                <Link to="/home" className="navItem">Minhas viagens</Link>
                    <p className="navItem separator">|</p>
                <Link to="/newTravel" className="navItem">Nova viagem</Link>
                    <p className="navItem separator">|</p>
                <Link to="#" className="navItem">Meu perfil</Link>
                    <p className="navItem separator">|</p>
                <Link to="/" className="navItem lastChild">Logout</Link>
            </div>
        </nav>
    )
}