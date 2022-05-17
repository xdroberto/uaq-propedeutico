import { enviar } from "./functions/envioInfo.js";
import {validate} from "./functions/validaciones.js"

document.addEventListener('DOMContentLoaded', e=>{

    validate("#formulario");
    enviar("#formulario");
})