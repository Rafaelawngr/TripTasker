import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import logo from "../assets/triptasker-texto.png";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:5145/api/Auth/login', {
            username: username, 
            password: password, 
        });
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token); 
        navigate("/home"); 
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
};

  return (
    <div id="login">
      <PageTitle title="Login" />
      <form className="formContainer" onSubmit={handleLogin}>
        <img className="logo" src={logo} alt="Logo TripTasker" />

        <label className="formLabel">
          Nome de Usuário
          <input
            className="formInput"
            type="text"
            placeholder="Digite aqui seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="formLabel">
          Senha
          <input
            className="formInput"
            type="password"
            placeholder="Digite aqui sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <div className="buttonContainer">
          <p className="registrationText">
            Não tem uma conta? <Link to="/registration">Crie uma!</Link>
          </p>
          <button type="submit" className="loginButton">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
