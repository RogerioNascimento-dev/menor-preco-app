import axios from 'axios';

const api = axios.create({
    //com o emulador este funciona
    baseURL:'http://10.0.2.2:3333'    
})

export default api;