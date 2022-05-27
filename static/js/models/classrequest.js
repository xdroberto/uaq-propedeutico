import { alertas } from "./class-alert.js";

export class Request {

    
    constructor(){}
    
    credentials(id){
        console.log(id);
        axios({
            method: "get",
            url:"http://localhost:3000/user/info",
            data: {id:"bhghg"},
            header: {"Content-Type":"application/json"}
        })
        .then(async(resp) => {
            console.log(resp)
            if(resp.status === 200){
                await this.animation.message({message:`Usuario: ${resp.data.mail} \n Contraseña: ${resp.data.id_alumno}`, icon:"error", color:"242,114,114", confirm:true})
            }
        })
        .catch(async(error) => {
            await this.animation.message({message:error.response.data.message, icon:"error", color:"242,114,114", confirm:true})
        })
    }
    animation =new alertas();

    login(dataform) {
        axios({
            method: "post",
            url:"http://localhost:3000/user/signin",
            data: dataform,
            header: {"Content-Type":"application/json"}
        })
        .then((resp) => {
            console.log(resp)
            if(resp.status === 200){
                sessionStorage.setItem('id',resp.data.id);
                window.location.href = "successful.html"
            }
        })
        .catch(async(error) => {
            await this.animation.message({message:error.response.data.message, icon:"error", color:"242,114,114", confirm:true})
        })
    }
}