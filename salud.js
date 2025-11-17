function presion(){
  let s=parseInt(document.getElementById("sis").value);
  let d=parseInt(document.getElementById("dia").value);
  let r=document.getElementById("resPresion");

  if(s<120 && d<80) r.innerHTML="Normal ";
  else if(s<130 && d<80) r.innerHTML="Elevada ";
  else if(s<140 || d<90) r.innerHTML="HTA 1 ";
  else r.innerHTML="HTA 2 ";
}

function promTemp(){
  let n=parseInt(document.getElementById("cantTemp").value);
  let datos=document.getElementById("listaTemp").value.split(",").map(Number);
  let r=document.getElementById("resTemp");

  if(datos.length!==n){ r.innerHTML="Pon exacto."; return; }

  let sum=0;
  for(let i=0;i<n;i++) sum+=datos[i];

  r.innerHTML="Promedio: "+(sum/n).toFixed(2);
}

function contarFiebre(){
  let t=document.getElementById("listaFiebre").value.split(",").map(Number);
  let i=0, c=0;

  while(i < t.length && t[i] !== 0){
    if(t[i] >= 38) c++;
    i++;
  }

  document.getElementById("resFiebre").innerHTML="Con fiebre: "+c;
}

function triage(){
  let c=parseInt(document.getElementById("codTriage").value);
  let r=document.getElementById("resTriage");

  switch(c){
    case 1: r.innerHTML="🔴 Rojo"; break;
    case 2: r.innerHTML="🟡 Amarillo"; break;
    case 3: r.innerHTML="🟢 Verde"; break;
    case 4: r.innerHTML="🔵 Azul"; break;
    default: r.innerHTML="no es valido";
  }
}
function spo(){
  let bajos = 0;
  let valor;
  let respuesta;

  do {
    valor = prompt("Ingresa una saturación (SpO2):");
    valor = Number(valor);

    if(!isNaN(valor)){
      if(valor < 92){
        bajos++;
      }
    }
    respuesta = prompt("¿Quieres ingresar otra? (si/no)").toLowerCase();

  } while(respuesta !== "no");

  document.getElementById("resSpo").innerHTML = "Bajas: " + bajos;
}
