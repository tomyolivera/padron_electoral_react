import axios from 'axios';

export const ConsultarPersona = async dni => await axios.get(`http://localhost:5000/Padron/api/${dni}`);

export const Votar = async (dni, numeroTramite) => await axios.post(`http://localhost:5000/Padron/api/votar`, {dni, numeroTramite});