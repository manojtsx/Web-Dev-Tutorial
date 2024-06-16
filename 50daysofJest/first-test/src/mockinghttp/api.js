import axios from 'axios'

export const fetchData = async() =>{
    const response = await axios.get('/data');
    return response.data;

}