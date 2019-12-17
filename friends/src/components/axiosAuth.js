import axios from 'axios';
import localStorage from './localStorage'

export const axiosWithAut = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/jspon',
            'Authorization': `${token}`,
        },
    });
};