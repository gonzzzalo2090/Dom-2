/*****************Validaciones*************************/
let error= '';
let enviar= false;
const parrafo = document.getElementById('errores');
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const validatePhone = (phone) => {
    let re = /^\d{10}$/;
    return re.test(phone);
  };
  

/*********************REgistrate **********************/
const nombreCompleto = document.getElementById("nombreApellido");
const dniCompleto = document.getElementById("dni");
const emailCompleto = document.getElementById("email");
const telefonoCompleto = document.getElementById("telefono");

const formularioRegistrate = document.getElementById("formRegistrate");

const registrarNombre = document.getElementById("registrarNombre");
const registrarDni = document.getElementById("registrarDni");
const registrarEmail = document.getElementById("registrarEmail");
const registrarTelefono = document.getElementById("registrarTelefono");

formularioRegistrate.addEventListener("submit",(e) => {
    e.preventDefault(e);

    const user = {
        nombre: nombreCompleto.value,
        dni: dniCompleto.value,
        email: emailCompleto.value,
        telefono: telefonoCompleto.value,
    }


    validaciones()

    pintardatosDeUsuario(user);
    sincronizarStorage(user);
});

function pintardatosDeUsuario( {nombre, dni, email, telefono} ) {
    registrarNombre.textContent = nombre;
    registrarDni.innerText = dni;
    registrarEmail.innerText = email;
    registrarTelefono.innerText = telefono;
}






const validaciones = () => {
/*validaciones de form*/
if (nombreCompleto.value.length <= 0) {
  error += `<b>*La casilla Nombre y Apellido esta incompleta</b> <br>`;
  enviar = true;
}  

if (dniCompleto.value.length <= 6) {
  error += `<b>*El numero de dni es invalido</b> <br>`;
  enviar = true;
}  

if (!regexEmail.test(emailCompleto.value)) {
  error += `*<b>El email no es valido</b> <br>`;
  enviar = true;
}

if (!validatePhone(telefonoCompleto.value)) {
  error += `<b>*El numero de telefono es invalido</b> <br>`;
  enviar = true;
}

if (enviar) {
  parrafo.classList.add('errores');
  parrafo.innerHTML = error;

} else {
  parrafo.classList.add('ok');
  parrafo.innerHTML = 'Enviado';
}

}
/*********************local storage ***************/
function sincronizarStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export default function recuperarUsuario(){
    let usuarioStorage = JSON.parse(localStorage.getItem('user'));
    pintardatosDeUsuario(usuarioStorage)
}


/*************************btn flotante - tasas e interes***************/
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const footerRegistrate = document.querySelector('#footerRegistrate');

footerRegistrate.addEventListener('click', mostrarOcultar2);

function mostrarOcultar2() {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Tasas e Intereses';
    }else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar Tasas e intereses';
    }
}


btnFlotante.addEventListener('click', mostrarOcultar);

function mostrarOcultar() {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Bases y Condiciones';
    }else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar Bases y Condiciones';
    }
}

/************************TOASTIFY*********************/
const registrarbtn = document.getElementById("registrar");

registrarbtn.addEventListener("click", () => {
     Toastify({
         text: "Datos guardados correctamente ✅",
         duration: 3000,
         gravity: "top",
         position: "right",
         style: {
             borderRadius: "5rem",   
             background: "linear-gradient(to right, rgb(34, 138, 236), #8f8f8f)"
         }
     }).showToast()
 })


/************************SWEET ALERT*********************/

const btnRegistrate = document.getElementById("btnAlertRegistrate");

btnRegistrate.addEventListener("click",() => {
  
  swal({
    title: "Genial",
    text: (registrarNombre.textContent +" Tu registro fue exitoso!"),
    icon: "success",
    confirm: "OK",
    timer: 3000,
  }).then(function() {
    window.location = "index.html";
});
});