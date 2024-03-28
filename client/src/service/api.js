// import axios from "axios";

// const URL = 'http://localhost:8000';

// export const  authenticateSignup = async (data)=>{
//     try {
//         return await axios.post(`${URL}/signup`,data);
//     } catch (error) {
//         console.log('Error while calling signup api',error);
//     }
// }

import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling Login API: ', error);
    }
}
