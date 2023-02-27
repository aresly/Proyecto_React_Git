/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const api = axios.create({
    baseURL:'https://63f9165dcdf8903954fa4d67.mockapi.io'
});


export default api;