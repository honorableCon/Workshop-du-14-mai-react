import axios from 'axios';

const url = "https://apisiteannonce.herokuapp.com/api";

export const getAllAnnonces = async () => { 
    const response = await axios.get(`${url}/annonces`)
    return response.data;
}

export const postAnnonce = async (annonce) => {
    const response = await axios.post(`${url}/addannonces`, annonce)
    return response.data;
}

export const getAnnonceById = async (id) => {
    const response = await axios.get(`${url}/showannonces/${id}`)
    return response.data;
}