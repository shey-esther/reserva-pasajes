// aqui el codigo js

class DatosPasajero {
    constructor(nroAsiento, nombre, apellido, dnipasajero){
      this.nroAsiento = nroAsiento;
      this.nombre = nombre;
      this.apellido = apellido;
      this.dnipasajero = dnipasajero;
    }
    detallar () {
      let html = '';
      html += 'Nombre:'+'<br>'+ this.nroAsiento + '<br>';
      html += 'Nombre:'+'<br>'+ this.nombre + '<br>';
      html += 'Nombre:'+'<br>'+ this.apellido + '<br>';
      html += 'Nombre:'+'<br>'+ this.dnipasajero + '<br>';
      return html;
    }
};
class Reservar {
  constructor () {
    this.celdita = undefined;
    this.asientoNr = [];
  }
  agregarPsj (DatosPasajero) {
    this.asientoNr.push(DatosPasajero);
    this.celdita.style.backgroundColor = 'red';
  }
  buscar (buscarConDNI) {
	for (var i = 0; i < asientoNr.length; i++) {
		   	var ps = this.asientoNr[i];
		if(ps.dnipasajero == buscarConDNI ){
			document.getElementById("nombre").value = ps.nombre;
  			document.getElementById("apellidos").value=ps.apellido;
 			document.getElementById("dni").value=ps.dnipasajero;
 		}
 	}
}
cancelar (buscarConDNI) {
// limpiar();
// var n_asiento = document.getElementById("mostrar").textContent;
// console.log(n_asiento);
	
 	for (var i = 0; i < this.asientoNr.length; i++) {
    	var ps = this.asientoNr[i];
		if(ps.asientoNr == buscarConDNI){
			 asiento.splice(i,1);
			//  console.log(asiento);
			this.celdita.style.backgroundColor="transparent";
 		}
	}
}
mostrar (datos) {
  	// var cuadro = "<table>"
  	for (var i = 0; i < this.asientoNr.length; i++) {
      var ps = this.asientoNr[i];
      datos.innerHTML += ps.detallar();
    	// cuadro +="<tr><td>N°ASIENTO:"+asiento[i].asientoNr+"</td>"+
    	// "<td>NOMBRE:"+asiento[i].nombre+"</td>"+
    	// "<td>APELLIDO:"+asiento[i].apellido+"</td>"+
   		// "<td>DNI:"+asiento[i].dni+"</td></tr>";
  	}
  	// cuadro+="</table>"
  	// document.getElementById("resultado").innerHTML=cuadro;
}
limpiar () {
  	document.getElementById("nombre").value="";
  	document.getElementById("apellidos").value=" ";
    document.getElementById("dni").value=" ";
    document.getElementById("mostrar").innerHTML =" ";
}
redirect (event) {
	// limpiar();
    // document.getElementById("mostrar").innerHTML=(event.target.textContent);
   	celditass = event.textContent;
  	n_asiento = parseInt(celditass);
  	// console.log(n_asiento);//me muestra el numero de asiento reservad
   	for (var i = 0; i < this.asientoNr.length; i++) {
   		var ps = (asiento[i].asientoNr);

   		// console.log(ps);//muestra el numero de asientos ya reservados los compara y al hacer el clic muestra los datos

		if(this.ps == n_asiento){
			document.getElementById("nombre").value = ps.nombre;
			document.getElementById("apellidos").value = ps.apellido;
			document.getElementById("dni").value = ps.dni;
      		document.getElementById("mostrar").innerHTML =" ";
		}
  }
  this.celda = event;
}

}


$('#reservar').click(function () {
	var nombre = $('#nombre').val();
	var apellido = $('#apellidos').val();
	var dni = $('#dni').val();
	var asientopsjs = parseInt(Reservar.celdita.textContent);
	console.log('asientopsjs');

	Reservar.agregarPsj(new DatosPasajero(nombre, apellido, dninumero));
	// Reservar.limpiar();
})






//generando tabla js
var celdita;
var n_asiento;
var asiento =[];//el arreglo con el numero de todo los asientos almacenados
var asientos = document.getElementsByTagName('td');
alert("Seleccione el numero antes de llenar los datos !!!!!!!");

	for (var i = 0; i < asientos.length; i++) {
    	asientos[i].addEventListener('click',redirect,false);
}


function redirect(event){
	limpiar();
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
   	celdita=event.target;
  	n_asiento=parseInt(event.target.textContent);

  	console.log(n_asiento);//me muestra el numero de asiento reservado

   	for (var i = 0; i < asiento.length; i++) {
   		var ps = (asiento[i].asientoNr);

   		console.log(ps);//muestra el numero de asientos ya reservados los compara y al hacer el clic muestra los datos

		if(n_asiento==ps){
		  document.getElementById("nombre").value=asiento[i].nombre;
		  document.getElementById("apellidos").value=asiento[i].apellido;
		  document.getElementById("dni").value=asiento[i].dni;

		}
   	}
}

function datosPasajero(asientoNr,nombre,apellido,dni){

  	this.asientoNr=asientoNr,
  	this.nombre=nombre,
  	this.apellido=apellido,
  	this.dni=dni
}
//reserva los datos de los asientos que seleccionamos y lo pinta


function reservar(){

  	var asientoNr=document.getElementById("mostrar").textContent;
  	var nombre=document.getElementById("nombre").value;
  	var apellido=document.getElementById("apellidos").value;
  	var dni=document.getElementById("dni").value;

  	var pasajero=new DatosPasajero(asientoNr,nombre,apellido,dni);
  	asiento.push(pasajero);
  	celdita.style.backgroundColor="red";
  	console.log(asiento);
 	limpiar()
}
//esta funcion limpia para hacer una nueva reserva
function limpiar(){

  	document.getElementById("mostrar").textContent=" ";
  	document.getElementById("nombre").value="";
  	document.getElementById("apellidos").value=" ";
 	document.getElementById("dni").value=" ";
}

//me muestra los datos ingresados al momento de reservar
function mostrar(){
  	var cuadro = "<table>"
  	for (var i = 0; i < asiento.length; i++) {
    	cuadro +="<ul><li>N°ASIENTO:"+asiento[i].asientoNr+"</li>"+
    	"<li>NOMBRE:"+asiento[i].nombre+"</li>"+
    	"<li>APELLIDO:"+asiento[i].apellido+"</li>"+
   		"<li>DNI:"+asiento[i].dni+"</li></ul>";
  	}
  	cuadro+="</table>"
  	document.getElementById("resultado").innerHTML=cuadro;
}
//busca con el dni comparandolos y te muestra los datos del pasajero
function buscar(){
	var dni =document.getElementById("dni1").value;
	for (var i = 0; i < asiento.length; i++) {
		   	var ps =asiento[i].dni;
		if(dni==ps){
			document.getElementById("nombre").value=asiento[i].nombre;
  			document.getElementById("apellidos").value=asiento[i].apellido;
 			document.getElementById("dni").value=asiento[i].dni;
 		}
 	}
}
 function cancelar(){
limpiar();
var n_asiento = document.getElementById("mostrar").textContent;
console.log(n_asiento);
	
 	for (var i = 0; i < asiento.length; i++) {
    	
		if(asiento[i].asientoNr == n_asiento){

			 asiento.splice(i,1);
			 console.log(asiento);

			celdita.style.backgroundColor="transparent";
 		}
	}
}   
