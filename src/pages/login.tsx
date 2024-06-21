import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import logo from "../assets/triptasker-logo.png";

export default function Login() {

    return (
        <div id="login">

            <PageTitle title="Login" />


            <form className="formContainer">

                <img className="logo" src={logo} alt="" />

                <label className="formLabel">
                    Nome
                    <input className="formInput" type="text" placeholder="E-mail ou cpf" />
                </label>

                <label className="formLabel">
                    Senha
                    <input className="formInput" type="text" />
                </label>

                <div className="buttonContainer">
                    <p className="registrationText">Não tem uma conta? <Link to="/registration">Crie uma!</Link></p>
                    <Link to="/home"><button type="button" className="loginButton">Login</button></Link>
                </div>
            </form>
        </ div>
    )
}