var apro="aprobada";
var exo="exonerada";
var podes="podesCursarla";
var noPodes="noPodesCursarla"
var credit=0;
var creditHTML=document.querySelector("#cred")


function estado(element,clase){
	let aux=element.identi();
	return aux.classList.contains(clase);	
};
function exonerad(element){
	document.querySelector(`#`+`${element.id}`).classList.replace(apro,exo);
	element.estadoDeAprobacion=exo;
	credit=credit+element.creditos;
	creditHTML.innerHTML=`${credit}`
};
function aprob(element){
	document.querySelector(`#`+`${element.id}`).classList.replace(podes,apro);
	element.estadoDeAprobacion=apro;
}
function noExo(element){
	document.querySelector(`#`+`${element.id}`).classList.replace(exo,podes)
	element.estadoDeAprobacion=podes;
	credit=credit-element.creditos;
	creditHTML.innerHTML=`${credit}`

}


function habilitado(element){

	element.verificacionDePrevias()
	if(element.estadoDeAprobacion==podes){
		document.querySelector(`#`+`${element.id}`).removeAttribute("disabled");
		document.querySelector(`#`+`${element.id}`).classList.add(podes);
	}else if(element.estadoDeAprobacion==noPodes){
		document.querySelector(`#`+`${element.id}`).setAttribute("disabled","");
		document.querySelector(`#`+`${element.id}`).classList.remove(podes);
		document.querySelector(`#`+`${element.id}`).classList.remove(apro);
		document.querySelector(`#`+`${element.id}`).classList.remove(exo);

	}

}

function retornarElement(iden,arrayDatos){
	let i=0;
	let top=arrayDatos.length;
	while(i<top && arrayDatos[i].id!=iden){
		i++
	}
	return arrayDatos[i]
}

function habilitar(element){
	let arr=element.esPreviaDe;
	let data;
	for(data of arr){
		habilitado(retornarElement(data,arrayDatos))
	}
}





function change(element){

	let aux=element.identi();
	aux.addEventListener("click",function(){
		if(element.estadoDeAprobacion==podes){
			aprob(element)
			
		}else {
			   if(element.estadoDeAprobacion==apro){
				exonerad(element)	
			
			
	           }else if(element.estadoDeAprobacion==exo){
					noExo(element);
					
					
				}
		}
				
		habilitar(element)	

})
}  



