function calcular(){

  	if(document.getElementById("tiempo").value < 1){
    	document.getElementById("resul").value = "Tiempo no valido";
  	}
		else{
  	  noches = calcularHotel(document.getElementById("tiempo").value);
  		estancia = calcularAvion(document.getElementById("tiempo").value, document.getElementById("destinos").value);
  		alquiler = calcularCoche(document.getElementById("tiempo").value);
			document.getElementById("precioH").value = noches + "€";
			document.getElementById("precioC").value = alquiler + "€";
			document.getElementById("precioA").value = estancia + "€";
  		document.getElementById("resul").value = noches + estancia + alquiler + "€";
		}
	}

function calcularHotel(tiempo){
  	var noches = parseInt(tiempo) * 140;
  	return noches;
	}

function calcularAvion(tiempo, destino){

		 var precio;
		 var porcentaje = 0.9;

		 if(tiempo <= 0){
		   alert("El tiempo debe ser almenos 1");
		   document.getElementById("resul").value = "No valido";
		 }

		 else if (destino == "Oviedo"){
		   precio = 325;
		  }

		  else if (destino == "Tokyo"){
		      precio = 1200;
		  }

		  else if (destino == "Madrid"){
		      precio = 200;
		  }

		  else if (destino == "Barcelona"){
		      precio = 150;
		  }

		  if (tiempo > 3){
		    return (precio * porcentaje);
		  }
		  else{
		    return precio;
		  }
}

function calcularCoche(tiempo){

    	if(tiempo < 3){
      		return tiempo * 40;
    	}

    	else if(tiempo < 7 && tiempo >2){
      		return tiempo * 40 - 20;
    	}
    else if(tiempo >= 7){
      return tiempo * 40 - 50;
    }
}

function mostrar(){
		document.getElementById('oculto').style.display = 'block';
		document.getElementById('mostrar').style.display = 'none';
		document.getElementById('ocultar').style.display = 'block';
}

function ocultar(){
		document.getElementById('oculto').style.display = 'none';
		document.getElementById('mostrar').style.display = 'block';
		document.getElementById('ocultar').style.display = 'none';
}
