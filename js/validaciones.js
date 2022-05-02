function validarCorreo (email){
	re=/^([admin]+)@(gmail]+)\.([com]{2,6})$/
	if(!re.exec(email)){
		alert('email no valido');
        
	}
	else alert('email valido');
	}
	var url = "https://apis.digital.gob.cl/dpa/regiones";
	fetch(url).then(function(result){
		if(result.ok){
			return result.json
		}
  
  	}).then(function(data){
	    data.forEach(function(element){
			let regiones = document.getElementById("regiones");
		  	let opt = document.createElement("option");
		  	opt.appendChild(document.createTextNode(element.nombre));
		  	opt.value=element.codigo

		  	regiones.appendChild(opt)
		  
	  	});
  	})
