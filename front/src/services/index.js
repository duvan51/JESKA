import axios from 'axios'

const URL = "http://localhost:4000/"

export const getProducts = async (data)=>{
    const req = await axios.get(`${URL}/products`)
    return req.data
}