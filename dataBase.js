
class asignatura{
	constructor(id,cantPrevias,previasRequeridas,estadoDeAprobacion,creditos,esPreviaDe){
		this.id=id;
		this.creditos=creditos;
		this.cantPrevias=cantPrevias;
		this.previasRequeridas=previasRequeridas;
		this.estadoDeAprobacion=estadoDeAprobacion;
		this.esPreviaDe=esPreviaDe;

	}
	// cambiarEstadoDeAprobacion(estado){
	// 	this.estadoDeAprobacion=estado;
	// }
	// estado(){
	// 	return this.estadoDeAprobacion;
	// }
	verificacionDePrevias(){
		
			let bandera=true;
			let i=0;//cuenta las previas
			while(i<this.cantPrevias && bandera){
				bandera= this.previasRequeridas[i][0].estadoDeAprobacion==this.previasRequeridas[i][1] || this.previasRequeridas[i][0].estadoDeAprobacion==exo 
				i++; 
			}
			if (bandera) {
				this.estadoDeAprobacion=podes;
			}
			else if((this.estadoDeAprobacion==exo||this.estadoDeAprobacion==apro||this.estadoDeAprobacion==podes)){
			this.estadoDeAprobacion=noPodes;
			}
		
		
		
	}
	falta(){
		var arr=[];
		for(let i=0;i<this.cantPrevias;i++){
			if(this.previasRequeridas[i][0].estadoDeAprobacion!=this.previasRequeridas[i][1]){
				arr.push(this.previasRequeridas[i])
			}
		}
		return arr;
	}
	identi(){
		return document.querySelector(`#`+this.id)
	}
}

// primerSemestre

const priProg=new asignatura("priProg",0,[],podes,0,["dataBase1","estrucDA"])
const mathDisLog1=new asignatura("mathDisLog1",0,[],podes,12,["mathDisLog2","estrucDA","pye"])
const ingT1= new asignatura("ingT1",0,[],podes,8,[])
const math= new asignatura("math",0,[],podes,0,[])
const arqui=new asignatura("arqui",0,[],podes,0,["sisOpe","ReddeCompu"])

// segundoSemestre
const sisOpe=new asignatura("sisOpe",1,[[arqui,apro]],noPodes,12,["admDeInfra"])
const dataBase1=new asignatura("dataBase1",1,[[priProg,apro]],noPodes,12,["dataBase2","ingDeSoft","progDeApp"])
const ingT2=new asignatura("ingT2",0,[],podes,4,[])
const mathDisLog2=new asignatura("mathDisLog2",1,[[mathDisLog1,apro]],noPodes,6,["pye"])
const estrucDA=new asignatura("estrucDA",2,[[mathDisLog1,apro],[priProg,apro]],noPodes,16,["progAvan","ingDeSoft","progDeApp"])

// tercerSemestre

     
const dataBase2    = new asignatura("dataBase2",1,[[dataBase1,apro]],noPodes,12,["ingDeSoft","progDeApp"])
const coe          = new asignatura("coe",0,[],podes,4,[])
const contabilidad = new asignatura("contabilidad",0,[],podes,8,[])
const progAvan     = new asignatura("progAvan",1,[[estrucDA,apro]],noPodes,12,["ingDeSoft","progDeApp"])
const ReddeCompu   = new asignatura("ReddeCompu",1,[[arqui,apro]],noPodes,12,["admDeInfra"])

// cuartoSemestre


const admDeInfra         = new asignatura("admDeInfra",2,[[ReddeCompu,apro],[sisOpe,exo]],noPodes,8,[])
const relacionesLaborales = new asignatura("relacionesLaborales",0,[],podes,4,[])
const ingDeSoft          = new asignatura("ingDeSoft",4,[[dataBase1,exo],[estrucDA,exo],[dataBase2,apro],[progAvan,apro]],noPodes,12,[])
const pye                = new asignatura("pye",2,[[mathDisLog1,exo],[mathDisLog2,exo]],noPodes,8,[])
const progDeApp          = new asignatura("progDeApp",4,[[dataBase1,exo],[estrucDA,exo],[dataBase2,apro],[progAvan,apro]],noPodes,16,[])


 
var arrayDatos=[priProg,mathDisLog1,ingT1,math,arqui,sisOpe,dataBase1,ingT2,mathDisLog2,estrucDA,ReddeCompu,dataBase2,coe,contabilidad,progAvan,admDeInfra,relacionesLaborales,ingDeSoft,pye,progDeApp]
