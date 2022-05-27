import{Request} from "../models/classrequest.js";
const request= new Request();

function enviar() {

    document.addEventListener('submit', e=>{
        let dataForms = {};
        e.preventDefault();

        const $form = document.querySelector(`#formulario`);
        const inputsdata = $form.querySelectorAll("[required]")
        inputsdata.forEach(el => {
            dataForms={...dataForms, [el.name]: el.value};
        })

        request.login(dataForms)
  
    })
}

export{enviar}