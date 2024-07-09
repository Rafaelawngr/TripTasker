import axios from "axios";

const baseUrl = "http://localhost:5145/api/Auth";

export async function register(email: string, username: string, password: string) {
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
}

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

const authService = {
  login,
  register,
};

export default authService;
