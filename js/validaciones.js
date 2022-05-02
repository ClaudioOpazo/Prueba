
/*----API_REGIONES----*/
var url = "https://apis.digital.gob.cl/dpa/regiones";

fetch(url).then(function (result) {
	if (result.ok) {
		return result.json();
	}

}).then(function (data) {
	data.forEach(function (element) {
		let regiones = document.getElementById("regiones");
		let opt = document.createElement("option");
		opt.appendChild(document.createTextNode(element.nombre));
		opt.value = element.codigo;

		regiones.appendChild(opt);

	})
})
/*----API_COMUNAS----*/
var url = "https://apis.digital.gob.cl/dpa/comunas";

fetch(url).then(function (result) {
	if (result.ok) {
		return result.json();
	}

}).then(function (data) {
	data.forEach(function (element) {
		let comunas = document.getElementById("comunas");
		let opt = document.createElement("option");
		opt.appendChild(document.createTextNode(element.nombre));
		opt.value = element.codigo;

		comunas.appendChild(opt);

	})
})

/*Validacion Correo*/
document.getElementById('email').addEventListener('input', function () {
	campo = event.target;
	valido = document.getElementById('emailOK');

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	//Se muestra un texto a modo de ejemplo, luego va a ser un icono
	if (emailRegex.test(campo.value)) {
		valido.innerText = "Correo válido";
		valido.style.color = 'green';
	} else {
		valido.innerText = "Correo incorrecto";
		valido.style.color = 'red'
	}
});

function verificarPasswords() {

	// Ontenemos los valores de los campos de contraseñas 
	pass1 = document.getElementById('pass1');
	pass2 = document.getElementById('pass2');

	// Verificamos si las constraseñas no coinciden 
	if (pass1.value != pass2.value) {

		// Si las constraseñas no coinciden mostramos un mensaje 
		document.getElementById("error").classList.add("mostrar");

		return false;
	} else {

		// Si las contraseñas coinciden ocultamos el mensaje de error
		document.getElementById("error").classList.remove("mostrar");

		// Mostramos un mensaje mencionando que las Contraseñas coinciden 
		document.getElementById("ok").classList.remove("ocultar");

		// Desabilitamos el botón de login 
		document.getElementById("login").disabled = true;

		// Refrescamos la página (Simulación de envío del formulario) 
		setTimeout(function () {
			location.reload();
		}, 3000);

		return true;
	}

}
/*Validacion*/
