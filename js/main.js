function validateForm(){
	validarCampoTexto($("#name"));
	validarCampoTexto($("#lastname"));
};
//validate name, lastname
	function validarCampoTexto(input){
		var mensaje= "";
		if($(input).val() == ""){
			mensaje += "campo Obligatorio "
		}else{
			if($(input).val().length >30){
				mensaje += "Debe tener menos de 30 caracteres "
			}
			if($(input).val().charAt(0).toUpperCase() != $(input).val()){
				mensaje += "Primera letra debe ser mayúscula "
			}
			if(($(input).val().match(/^[a-zA-Z]+$/))){
				mensaje += "Sólo debe contener letras "
			}
		}
		$(input).siblings().filter("span").remove();
		var span_nombre = $("<span>" + mensaje + "</span>");
		$(input).parent().append(span_nombre);
	}

//validate email