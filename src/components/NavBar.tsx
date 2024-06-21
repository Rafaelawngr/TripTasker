import { Link } from "react-router-dom";
import logo from "../assets/triptasker-logo.png";

export default function NavBar() {
    return (
        <nav id="NavBar">
            <img className="logo" src={logo} alt="logo triptasker" />

            <div className="navItemContainer">
                <Link to="#" className="navItem">Minhas viagens</Link>
                <Link to="#" className="navItem">Nova viagem</Link>
                <Link to="#" className="navItem">Meu perfil</Link>
                <Link to="/" className="navItem lastChild">Logout</Link>
            </div>
        </nav>
    )
}