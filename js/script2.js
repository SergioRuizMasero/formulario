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

    
    
    if (!correos.includes(user)){

        correos.push(user);
        contraseñas.push(password);
        
        setCookie(user);
        setCookie(password);
        console.log(correos);
        limpiarForm();
        alert("Registrado");
        document.getElementById("login").click();

    } else {

        alert("Ya existe el correo");
    }
    
    
    
}

function login(event) {

    var user = document.getElementById("emailLogin").value;
    var password= document.getElementById("contraseñaLogin").value;

    if (correos.includes(user) && contraseñas.includes(password)){
        
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

}


function validaCorreo() {

    

    
}

function eventoRegistro(event) {
    event.preventDefault();
    alert("entra");
}
