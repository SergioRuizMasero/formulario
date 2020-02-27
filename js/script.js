window.onload = iniciar;
function iniciar() {

    if(document.cookie == ""){
        document.getElementById("botonRegistro").addEventListener("click", cuentasRegistradas,false);
        document.getElementById("login").addEventListener("click", login,false);
    }
    else registrado();

}

const correos = [];
const contraseñas = [];

const botonRegistro = 
document.getElementById("formRegistro")
.addEventListener("submit",cuentasRegistradas, false);

const botonLogin = 
document.getElementById("formLogin").addEventListener("submit",login, false);

function cuentasRegistradas(event) {
    event.preventDefault();
    var user = document.getElementById("email").value;
    var password= document.getElementById("contraseña").value;

    if (validaCorreo(user) || validaTelefono(user)) {
    
        if (!correos.includes(user)){

            correos.push(user);
            contraseñas.push(password);
            
            setCookie("usuario",user,1);
            setCookie("password",password,1);
            registrado(document.getElementById("email").value);
            console.log(correos);
            limpiarForm();
            alert("Registrado");
            redireccionarPag();
            //document.getElementById("login").click();

        } else {

            alert("Ya existe el correo");
        }
    
    } else {

    alert("El campo email tiene que tener un formato correcto.");
}
    
}

function login(event) {

    var user = document.getElementById("emailLogin").value;
    var password= document.getElementById("contraseñaLogin").value;

    if (getCookie("usuario")===user && getCookie("password")===password){
        
        event.preventDefault();
        redireccionarPag();
    } else {

        alert("Usuario/Contraseña incorrectos.");
        event.preventDefault();
    }

}

function limpiarForm() {

    document.getElementById("formRegistro").reset();
}


function redireccionarPag() {

    location.href="registrado.html";
    setCookie("estado","Estas logueado");
    


}


function validaCorreo(email) {

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;

    
}


function validaTelefono(telefono) {

    var regex = /^([9,7,6]{1})+([0-9]{8})$/;
    return regex.test(telefono) ? true : false;

    
}

function eventoRegistro(event) {
    event.preventDefault();
    alert("entra");
}

