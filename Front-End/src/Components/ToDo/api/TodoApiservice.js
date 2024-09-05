import { apiClient } from "./BaseUrl";

export const retrieveAllToDosApi = (username) => apiClient.get(`/users/${username}/todos`)
export const retrieveTodoForIdApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
export const deleteToDoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const updateToDoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)
export const addToDoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)
export const authenticateApi = (token) => apiClient.get(`/basicAuth`, {
    headers:
            {Authorization : token }
})
