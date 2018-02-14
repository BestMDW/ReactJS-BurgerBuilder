import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f0ee4.firebaseio.com/'
});

export default instance;