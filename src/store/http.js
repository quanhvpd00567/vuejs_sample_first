import axios from "axios";
export default HTTP = axios.create({
    baseURL: '',
    headers: {
        Authorization: 'Bearer {token}'
    }
})