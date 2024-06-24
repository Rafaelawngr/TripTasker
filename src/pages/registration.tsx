import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import logo from "../assets/triptasker-logo.png";

export default function Registration() {
    return (
        <div id="registration">

            <PageTitle title="Cadastro" />

            <form className="formContainer">
                
            <img className="logo" src={logo} alt="" />

                <label className="formLabel">
                    Nome completo
                    <input className="formInput" type="text" placeholder="Trip Tasker" />
                </label>

                <label className="formLabel">
                    E-mail
                    <input className="formInput" type="text" placeholder="safetravel@triptasker.com" />
                </label>

                <label className="formLabel">
                    CPF
                    <input className="formInput" type="text" placeholder="012.345.678-90" />
                </label>

                <label className="formLabel">
                    Senha
                    <input className="formInput" type="password" placeholder="*******" />
                </label>

                <label className="formLabel">
                    Confirme a senha
                    <input className="formInput" type="password" placeholder="*******" />
                </label>

                <div className="buttonContainer">
                    <Link to="/"><button className="cancelButton">Voltar</button></Link>
                    <Link to="/home"><button type="button" className="loginButton">Registrar</button></Link>
                </div>
            </form>
        </ div>
    )
}