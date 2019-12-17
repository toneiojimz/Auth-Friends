import axios from 'axios';


export const axiosWithAut = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            baseURL: 'http://localhost:5000/api',
            Authorization: `${token}`,
        },
    });
};