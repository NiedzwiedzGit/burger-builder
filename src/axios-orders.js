import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-51237.firebaseio.com/"
});

export default instance;