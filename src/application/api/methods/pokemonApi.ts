import api from '../config/api';

const pokeApiUrl = 'https://pokeapi.co/api/v2';

const search = (limit = 1000, offset = 0) => api.get(`${pokeApiUrl}/pokemon?limit=${limit}&offset=${offset}`);
const get = (number = 1) => api.get(`${pokeApiUrl}/pokemon/${number}`);

export default {
    search,
    get,
};
