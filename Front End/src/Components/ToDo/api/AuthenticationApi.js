import { apiClient } from "./BaseUrl"

export const authenticateApi = (token) => apiClient.get(`/basicAuth`, {
    headers:
            {Authorization : token }
})
export const authenticateWithGoogle = () => {window.location.href = 'http://localhost:8080/login/oauth2/code/google'}

export const authenticateJWTApi = (username, password) => apiClient.post(`/authenticate`,{username,password})