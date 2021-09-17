//creacion de cobjetos//
class PreguntasNivel1
{
  constructor(pn1,r1,r2,r3,r4)
    {
    this.preguntaNvl1=pn1;
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
    this.preguntaNvl2=pn2;
    this.respCorrecta=r1;
    this.respError1=r2;
    this.respError2=r3;
    this.respError3=r4;
  }
}
class PreguntasNivel3
{
  constructor(pn3,r1,r2,r3,r4)
  {
    this.preguntaNvl3=pn3;
    this.respCorrecta=r1;
    this.respError1=r2;
    this.respError2=r3;
    this.respError3=r4;
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
var pregunta;
var correcta=0;

console.log(aleatorioP1,aleatorioP2,aleatorioP3,aleatorioP4,aleatorioP5);

//Introduccion preguntas categoria 1
preguntaCategoria1.push(new PreguntasNivel1("¿Cuál es el río más largo del mundo?","Amazonas","Nilo","Quito","Atrato"));
preguntaCategoria1.push(new PreguntasNivel1("¿cuanto es 2+2? ","4","2","3","5"));
preguntaCategoria1.push(new PreguntasNivel1("¿cuanto es 5+5?","10","5","20","15"));
preguntaCategoria1.push(new PreguntasNivel1("¿Cuál es el país con más habitantes del mundo?","China","Colombia","Mexico","Medellin"));
preguntaCategoria1.push(new PreguntasNivel1("¿Donde vive el papa de la iglesia catolica?","El Baticano","Francia","Holanda","Colombia"));

console.log(preguntaCategoria1);
pregunta1=preguntaCategoria1[0];
console.log(pregunta1.preguntaNvl1);


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
    pregunta=preguntaCategoria1[0];
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    break;
  case 1:
    pregunta=preguntaCategoria1[1];
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    correcta=1
  break;

  case 2:
    pregunta=preguntaCategoria1[2];
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    correcta=1 
  break;

  case 3:
    pregunta=preguntaCategoria1[3];    
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    correcta=1
    break;
  case 4:
    pregunta=preguntaCategoria1[4];
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    correcta=1 
  break;   
}
//fin inicializacion del juego

//haciendo el juego consecutivo si gana
if (resUsuario==correcta) {
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
    pregunta=preguntaCategoria1[0];
    resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
    break;
    case 1:
      pregunta=preguntaCategoria1[1];
      resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
      correcta=1
    break;

    case 2:
      pregunta=preguntaCategoria1[2];
      resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
      correcta=1 
    break;

    case 3:
      pregunta=preguntaCategoria1[3];    
      resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
      correcta=1
      break;
    case 4:
      pregunta=preguntaCategoria1[4];
      resUsuario=prompt (pregunta.preguntaNvl1 +"\n" + "1-"+pregunta.respCorrecta+ "\n"+  "2-"+pregunta.respError1+"\n"+ "3-"+pregunta.respError2 +"\n"  +"4-"+pregunta.respError3);
      correcta=1
    break     
  }
} 

if (resUsuario==correcta) {
  victoria=victoria+1;
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
      
      break;

    case 2:
      resUsuario=prompt ("CASO 2 cat2");
      
    break;

    case 3:
      resUsuario= prompt ("CASO 3 cat2");
      
    break;
    case 4:
      resUsuario= prompt ("CASO 4 cat2");
      
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
 //segunda pregunta de la categoria 2 
  switch (aleatorioP2) {
    case 0:
      resUsuario=prompt ("CASO 0 pre2 cat 2");
    break;
    
    case 1:
      resUsuario=prompt ("CASO 1 pre2 cat 2");
      
    break;
  
    case 2:
      resUsuario=prompt ("CASO 2  pre2 cat 2");    
    break;
  
    case 3:
      resUsuario= prompt ("CASO 3 pre2 cat 2");
    break;

    case 4:
      resUsuario= prompt ("CASO 4 pre2 cat 2");  
    break;
  }
} 
if (resUsuario==4){ //si cuarta respuesta es correcta{
  victoria=victoria+1;
} 
//condicion de respuesta erronea
if (victoria>=8)
alert ("Eres el campeon de este juego" +"\n" +"FELICITACIONES")
else {
  alert("lo sentimos, perdiste")
  alert("siempre lo puedes volver a intentar")
}
console.log("victorias acumuladas"+victoria);
//agregar opcion de si deseas seguir jugando por mas dinero//
//agregar premio//