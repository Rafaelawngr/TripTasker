import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import logo from "../assets/triptasker-logo.png";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5145/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erro ao registrar usuário: ${errorMessage}`);
      }

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      alert("Usuário registrado com sucesso!");
    } catch (error) {
      alert("Erro ao registrar usuário.");
    }
  };

  return (
    <div id="registration">
      <PageTitle title="Cadastro" />
      <form className="formContainer" onSubmit={handleRegister}>
        <img className="logo" src={logo} alt="TripTasker Logo" />

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
          E-mail
          <input
            className="formInput"
            type="email"
            placeholder="Digite aqui seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <label className="formLabel">
          Confirme a senha
          <input
            className="formInput"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <div className="buttonContainer">
          <Link to="/">
            <button className="cancelButton" type="button">
              Voltar
            </button>
          </Link>
          <button type="submit" className="loginButton">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
