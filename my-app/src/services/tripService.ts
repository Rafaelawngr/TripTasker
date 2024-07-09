import axios from 'axios';

const baseUrl = 'http://localhost:5145/api/Trip';

async function getUserTrips(userId: string) {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter viagens do usuário:', error);
        throw error;
    }
}

async function createTrip(userId: string, newTrip: any) {
    try {
        const response = await axios.post(`${baseUrl}/user/${userId}`, newTrip);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar viagem:', error);
        throw error;
    }
}

async function updateTrip(userId: string, tripId: string, updatedTrip: any) {
    try {
        const response = await axios.put(`${baseUrl}/user/${userId}/${tripId}`, updatedTrip);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar viagem:', error);
        throw error;
    }
}

async function deleteTrip(userId: string, tripId: string) {
    try {
        await axios.delete(`${baseUrl}/user/${userId}/${tripId}`);
        console.log('Viagem deletada com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar viagem:', error);
        throw error;
    }
}

const tripService = {
    getUserTrips,
    createTrip,
    updateTrip,
    deleteTrip
};

export default tripService;
