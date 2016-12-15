function validateForm(){
	validarCampoTexto($("#name"));
	validarCampoTexto($("#lastname"));
	ValidaEmail($("#input-email"));
	validaPwd($("#input-password"));
};
//validate name, lastname
function validarCampoTexto(input){
	var mensaje= "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio "
	}else{
		if($(input).val().length >30){
			mensaje += "Debe tener menos de 30 caracteres "
		}
		if($(input).val().charAt(0).toUpperCase() != $(input).val().charAt(0)){
			mensaje += "Primera letra debe ser mayúscula "
		}
		if(!($(input).val().match(/^[a-zA-Z]+$/))){
			mensaje += "Sólo debe contener letras "
		}
	}
	$(input).siblings().filter("span").remove();
	// colocar este span, ssi es != ""
	mostrarMsg(mensaje, input);
};

//validate email
function ValidaEmail(input) {
	var mensaje ="";
	if($(input).val() == ""){
		mensaje += "campo obligatorio"
	}else{
		if(!($(input).val().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))){
			mensaje += "Debe ser un correo válido"
		}
	}
	$(input).siblings().filter("span").remove();
	// colocar este span, ssi es != ""
	mostrarMsg(mensaje, input);
};

function validaPwd(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "campo obligatorio"
	}else if(!($(input).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))){
		mensaje += "La contraseña debe contener 8 caracteres, al menos 1 numero, 1 mayúscula, 1 minúscula"
	}
	// limpiamos los otros span
	$(input).siblings().filter("span").remove();

	// colocar este span, ssi es != ""
	mostrarMsg(mensaje, input);
};


//funcion para el mensaje
function mostrarMsg(mensaje, input){
	if(mensaje == ""){
		return;
	}
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
};
//funcion para el checkbox


//funcion para el select