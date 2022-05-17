function enviar() {

    document.addEventListener('submit', e=>{
        let dataForms = {};
        e.preventDefault();

        const $form = document.querySelector(`#formulario`);
        const inputsdata = $form.querySelectorAll("[required]")
        inputsdata.forEach(el => {
            dataForms={...dataForms, [el.name]: el.value};
        })
        axios({
            methods: "post",
            URL:"http://localhost:3000/user/signin",
            data: dataForms
        })

        .then((resp) => {
            console.log(resp.data)
        })

        .catch((error) => {
            console.log(error.data)
        })
    })
}

export{enviar}