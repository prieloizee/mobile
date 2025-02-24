import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.234.139:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login", user)
}

const sheets2 = {
    postCadastro:(user)=>api.post("user", user)
}



export default sheets2;