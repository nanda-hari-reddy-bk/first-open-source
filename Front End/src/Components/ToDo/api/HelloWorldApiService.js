import axios from "axios";
import { apiClient } from "./BaseUrl";

export const helloWorldReq = () => apiClient.get('/hello-world')
export const helloWorlBeandReq = () => apiClient.get('/hello-world-bean')
export const helloWorldPathVariableReq = (username) => apiClient.get(`/hello-world/path-variable/${username}`)
