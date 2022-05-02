function verificarPasswords() {

	// Ontenemos los valores de los campos de contraseñas 
	email = document.getElementById('email');
	pass = document.getElementById('pass');

	// Verificamos si las constraseñas no coinciden 
	if (email.value != "cla.opazo@duocuc.cl" && pass.value != "claudio123") {

		// Si las constraseñas no coinciden mostramos un mensaje 
		document.getElementById("error").classList.add("mostrar");

		return false;
	} else if (email.value == "cla.opazo@duocuc.cl" && pass.value == "claudio123") {

		// Si las constraseñas no coinciden mostramos un mensaje 
		document.getElementById("ok").classList.add("mostrar");

		return false;
	} else {

		// Si las contraseñas coinciden ocultamos el mensaje de error
		document.getElementById("error").classList.remove("mostrar");

		// Mostramos un mensaje mencionando que las Contraseñas coinciden 
		document.getElementById("ok").classList.remove("ocultar");

		// Desabilitamos el botón de login 
		document.getElementById("enviar").disabled = true;

		// Refrescamos la página (Simulación de envío del formulario) 
		setTimeout(function () {
			location.reload();
		}, 3000);

		return true;
	}

}