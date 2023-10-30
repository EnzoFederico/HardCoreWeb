const name =document.getElementById("name")
const surname =document.getElementById("surname")
const email =document.getElementById("email")
const consulta =document.getElementById("consulta")
const parrafo =document.getElementById("atencion")

const form =document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let atencion =""
    let entrar= false
    let validacion_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    parrafo.innerHTML=""

/* validacion Nombre*/
    if(name.value.length <=2){
        
        atencion +='El nombre no es valido <br>' 
        entrar = true
    }

    /* validacion apellido*/
    if(surname.value.length <=2){
        
        atencion +='El apellido no es valido <br>' 
        entrar = true
    }

    /* validacion email*/
    if(!validacion_email.test(email.value)){
        atencion +='El email no es valido <br>' 
        entrar = true
    }

   /* validacion consulta*/
    if(consulta.value.length <=5){
        
    atencion +='La consulta no es valida <br>' 
    entrar = true
    }

  


    if(entrar){
        parrafo.innerHTML= atencion
    }else{
        parrafo.innerHTML="ENVIADO"
    }


})