const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const error_nombre = document.getElementById('error_nombre');
    const error_email = document.getElementById('error_email');

    let esValido = true;

    if (nombre == ""){
        error_nombre.textContent = "El nombre no puede estar vacío";
        esValido = false;
    }else{
        error_nombre.textContent = "";
    }

    if (email == ""){
        error_email.textContent = "El email no puede estar vacio";
        esValido = false;
    }else{
        if(!email.includes("@") || !email.includes(".")){
            error_email.textContent = "El email debe contener @ y .";
            esValido = false;
        }else{
            error_email.textContent = "";
        }
    }
    if(esValido){
        console.log("Enviando Datos...")
        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
    }
})
