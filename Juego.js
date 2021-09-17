//creacion de cobjetos//
class PreguntasNivel1
{
  constructor(pn1,r1,r2,r3,r4)
    {
    this.pregunta1=pn1;
    this.respCorrecta=r1;
    this.respError1=r2;
    this.respError2=r3;
    this.respError3=r4;
    }
}

class PreguntasNivel2
{
  constructor(pn2,r1,r2,r3,r4)
  {
    this.preguntaDeNivel2=pn2;
    this.respuestaCorrecta=r1;
    this.respuestaError1=r2;
    this.respuestaError2=r3;
    this.respuestaError3=r4;  
  }
}
class PreguntasNivel3
{
  constructor(pn3,r1,r2,r3,r4)
  {
    this.preguntaDeNivel3=pn3;
    this.respuestaCorrecta=r1;
    this.respuestaError1=r2;
    this.respuestaError2=r3;
    this.respuestaError3=r4;
  }
}


//creacion caja de preguntas
var preguntaCategoria1=[];
var preguntaCategoria2=[];
var preguntaCategoria3=[];
var preguntaCategoria4=[];
//variables auxiliares//
var resUsuario=0;
var aleatorioP1=aleatorio(0,4);
var aleatorioP2=aleatorio(0,4);
var aleatorioP3=aleatorio(0,4);
var aleatorioP4=aleatorio(0,4);
var aleatorioP5=aleatorio(0,4);
var victoria=0;
console.log(aleatorioP1,aleatorioP2,aleatorioP3,aleatorioP4,aleatorioP5);

//Introduccion preguntas categoria 1
preguntaCategoria1.push(new PreguntasNivel1("¿Cuál es el río más largo del mundo?","Amazonas","Nilo","Quito","Atrato"));
preguntaCategoria1.push(new PreguntasNivel1("Pregunta2","respeuestacorrectap2","Respuestaerrada1","Respuestaerrada2","Respuestaerrada3"));
preguntaCategoria1.push(new PreguntasNivel1("Pregunta3","respeuestacorrectap3","Respuestaerrada1","Respuestaerrada2","Respuestaerrada3"));
console.log(preguntaCategoria1);
a=preguntaCategoria1[0];
console.log(a.pregunta1);

/*var categoria1=
document.write(a.pregunta1);
prompt (a.pregunta1);*/
//calculo de aleatorios//
function aleatorio(min, maxi)
{
  var resultado;
  resultado=Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}

//Iniciando el juego
switch (aleatorioP1) {
  case 0:
    resUsuario=prompt ("CASO 0");
    //return resUsuario
    break;
  case 1:
    resUsuario=prompt ("CASO 1");
    //return resUsuario
    break;

  case 2:
    resUsuario=prompt ("CASO 2");
    //return resUsuario
  break;

  case 3:
    resUsuario= prompt ("CASO 3");
    //return resUsuario
  break;
  case 4:
    resUsuario= prompt ("CASO 4");
    //return resUsuario
  break;   
}
//fin inicializacion del juego

//haciendo el juego consecutivo si gana
if (resUsuario==1) {
  //pasamos a la siguiente ronda//
  //sacando segunda pregunta aleatoria
  victoria=victoria+1;
  //aleatorioP2=aleatorio(0,4);
  while (aleatorioP1==aleatorioP2) {
    aleatorioP2=aleatorio(0,4);
  }
 //segunda pregunta de la categoria 1 
  switch (aleatorioP2) {
    case 0:
      resUsuario=prompt ("CASO 0");
      //return resUsuario
      break;
    case 1:
      resUsuario=prompt ("CASO 1");
      //return resUsuario
      break;
  
    case 2:
      resUsuario=prompt ("CASO 2");
      //return resUsuario
    break;
  
    case 3:
      resUsuario= prompt ("CASO 3");
      //return resUsuario
    break;
    case 4:
      resUsuario= prompt ("CASO 4");
      //return resUsuario
    break;
          
    default:
      break;
      
  }
  //return victoria;
} 
else {
  alert("lo sentimos, perdiste")
}

if (resUsuario==2) {
  victoria=victoria+1;
} else {
  alert("siempre lo puedes volver a intentar")
}
console.log("victorias acumuladas"+victoria);

//pasando a las preguntas de categoria dos//
if (victoria==2) {
 alert("Felicidades, ahora aumentaremos la dificultad")
 aleatorioP1=aleatorio(0,4);
 aleatorioP2=aleatorio(0,4); 
 
 switch (aleatorioP1) {
    case 0:
      resUsuario=prompt ("CASO 0 cat2");
      //return resUsuario
      break;
    case 1:
      resUsuario=prompt ("CASO 1 cat2");
      //return resUsuario
      break;

    case 2:
      resUsuario=prompt ("CASO 2 cat2");
      //return resUsuario
    break;

    case 3:
      resUsuario= prompt ("CASO 3 cat2");
      //return resUsuario
    break;
    case 4:
      resUsuario= prompt ("CASO 4 cat2");
      //return resUsuario
    break;          
  }
}

if (resUsuario==3) {
  //pasamos a la siguiente ronda categoria 2//
  //sacando segunda pregunta aleatoria
  victoria=victoria+1;
  //aleatorioP2=aleatorio(0,4);
  while (aleatorioP1==aleatorioP2) {
    aleatorioP2=aleatorio(0,4);
  }
 //segunda pregunta de la categoria 1 
  switch (aleatorioP2) {
    case 0:
      resUsuario=prompt ("CASO 0 pre2 cat 2");
      //return resUsuario
      break;
    case 1:
      resUsuario=prompt ("CASO 1 pre2 cat 2");
      //return resUsuario
      break;
  
    case 2:
      resUsuario=prompt ("CASO 2  pre2 cat 2");
      //return resUsuario
    break;
  
    case 3:
      resUsuario= prompt ("CASO 3 pre2 cat 2");
      //return resUsuario
    break;
    case 4:
      resUsuario= prompt ("CASO 4 pre2 cat 2");
      //return resUsuario
    break;
  }
  //return victoria;
} 
else {
  alert("lo sentimos, perdiste")
}

if (resUsuario==4){ //si cuarta respuesta es correcta{
  victoria=victoria+1;
} else {
  alert("lo sentimos, perdiste")
  alert("siempre lo puedes volver a intentar")
}
console.log("victorias acumuladas"+victoria);
