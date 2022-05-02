function validarCorreo (email){
	re=/^([admin]+)@(gmail]+)\.([com]{2,6})$/
	if(!re.exec(email)){
		alert('email no valido');
        
	}
	else alert('email valido');
	}