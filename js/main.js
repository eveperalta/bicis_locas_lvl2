function validateForm(){
	validarCampoTexto($("#name"));
	validarCampoTexto($("#lastname"));
	ValidaEmail($("#input-email"));
	validaPwd($("#input-password"));
	validarChkbx($(".checkbox"));
	validarSelect($(".form-control"));
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
function validarChkbx(input){
	if($(':checkbox').is(":checked")){
		return
	}else{
		var span_nombre = $("<span class='error'>" + "Este botón es obligatorio" + "</span>");
		$(':checkbox').parent().append(span_nombre);

	}
};
        
//funcion para el select
function validarSelect(input){
	if($("select").val()== 0){
		 var span_nombre = $("<span class='error2'>" + "Selecciona un tipo de Bici" + "</span>");
		$('select').parent().append(span_nombre);
	}
};

//funcion para esconder el formulario
$(".form-signup").on("submit",function onClickClose(){
    $(".form-signup").hide();
});

// ajax!
$.ajax({
  		url: 'http://swapi.co/api/planets',
  		type: 'GET',
  		success: function(data){
  			// aca si la funcion es exitosa
  			var planetas = data.results;
  			var lista = $('#planetas ul');

  			for (var i=0 ; i<planetas.length ; ++i){
  				lista.append('<li>Planeta <b>' + planetas[i].name + '</b> Poblacion: ' + planetas[i].population + '</li>');
  			}
  		},
  		error: function(error){
  			// en el caso de error
  			console.log('error');
  		}
});

//cambiar avatar
$("#cambiarAvatar").on("change", function (evento){
	//recuperar archivo subido
	var archivo= $ (this)[0].files[0];
	//crear file reader, es un objeto de JS para leer archivos
	var reader = new FileReader();
	//decrile al fr que hacer cuando termine de cargar
	reader.onload = function(efr){
		$("#avatar img").attr("src", efr.target.result);
	}
	//cargar la imagen
	reader.readAsDataURL(archivo);

});

//cambie div a form para hacer q guarde en localstorage
$("form").on("submit", function(es){
	//evitar q se envie el form
	es.preventDefault();

	//seleccionar el archivo de la imagen
	var archivo = $("#cambiarAvatar")[0].files[0];

	//creamos filereader
	var reader = new FileReader();

	//que hacer cuando termine de cargar
	reader.onloadend = function(efr){
		var datos_imagen = reader.result;
		//se guarda imagen en localstorage
		localStorage.setItem("avatar_data", datos_imagen);
		alert("foto de perfil actualizada");
	}
	//leer la imagen+
	if(archivo){
		reader.readAsDataURL(archivo);
	}
});
//al cargar la pagina recuperar imagen del ls
$(document).ready(function(){
	//recuperar datos del ls
	var avatar_data = localStorage.getItem ("avatar_data");
	//cambiar la foto por defecto
	if(avatar_data){
		$("#avatar img").attr("src",avatar_data);
	}
});
