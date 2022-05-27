export class alertas{

    message({message,color='243, 156, 18',icon='info',confirm=true,timer=0,width=600}){
        Swal.fire({
            position: 'center',
            iconColor: `rgb(${color})`,
            icon: icon,
            title: message,
            confirmButtonColor: `rgb(${color})`,
            showConfirmButton: confirm,
            width: width,
            timer:timer,
        })
    }
}