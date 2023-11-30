//Service para consultar a la API sobre el incio de sesion y mas de la App 

import axios from "axios";
import { enviorment } from '../Services/envirorment'

//Cliente principal 
const apiClient = axios.create({
    baseURL: enviorment.apiUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

//EndPoints
export default {
    register(usuarioDto){
        return apiClient.post('/Auth/register', usuarioDto)
    },

    login(credentials){
        return apiClient.post('/Auth/login', credentials)
    },

    forgotPassword(correo){
        return apiClient.post(`/Auth/forgot-password/${correo}`)
    },

    suspenderUser(){

    },

    enableUser(){

    },

    delete(){
        
    }
}