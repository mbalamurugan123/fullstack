import axios from "axios";
import instance from "./Axios";

const api_url="http://localhost:8181";

export const signIn=(data)=> axios.post(`${api_url}/api/connect/auth/login`,data);
export const signUp=(data)=> axios.post(`${api_url}/api/connect/auth/register`,data);
