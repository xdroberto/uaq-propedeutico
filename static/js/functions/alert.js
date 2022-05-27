import {Request} from "../models/classrequest.js"
const request = new Request()

const credentialAl = () => {

    if (sessionStorage.getItem("id")) {
    
        const id = sessionStorage.getItem("id");
        request.credentials(id)
        
    }
}

credentialAl();
