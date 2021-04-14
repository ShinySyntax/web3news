import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? "https://web3news.app/api" : 'http://localhost:3001',
    headers: {
        'Accept': 'application/json'
    }
})