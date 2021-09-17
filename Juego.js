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

class CategoriaPremio
{
  constructor(cat,prem)
    {
    this.categoria=cat;
    this.premio=prem;
    }
}

//creacion caja de preguntas
var preguntaCategoria1=[];
var preguntaCategoria2=[];
var preguntaCategoria3=[];
var preguntaCategoria4=[];
var preguntaCategoria5=[];
var categoriaxPremio=[];
//variables de ayuda//
var resUsuario=0;
var aleatorio;
var victoria=0;
var pregunta;
var correcta=0;
var nombreUsuario;
var acumuladoPuntos=0;

//creacion de categoria y premios por categoria
categoriaxPremio[0]=new CategoriaPremio("Categoria 1 - Super Facil", 100);
categoriaxPremio[1]=new CategoriaPremio("Categoria 2 - Facil", 150);
categoriaxPremio[2]=new CategoriaPremio("Categoria 3 - Mediio", 200);
categoriaxPremio[3]=new CategoriaPremio("Categoria 4 - Dificil", 350);
categoriaxPremio[4]=new CategoriaPremio("Categoria 5 - Super Dificil", 500);

//Introduccion preguntas categoria 1
preguntaCategoria1.push(new PreguntasNivel1("¿Si hoy es lunes, ayer era?","Domingo","Martes","Miercoles","Sabado"));
preguntaCategoria1.push(new PreguntasNivel1("¿cuanto es 2+2? ","4","2","3","5"));
preguntaCategoria1.push(new PreguntasNivel1("¿cuanto es 5+5?","10","5","20","15"));
preguntaCategoria1.push(new PreguntasNivel1("¿Si hoy es sabado, mañana serà?","Domingo","Martes","Miercoles","Sabado"));
preguntaCategoria1.push(new PreguntasNivel1("¿cuanto es 15-10?","5","10","20","1"));

//Introduccion preguntas categoria 2
preguntaCategoria2.push(new PreguntasNivel2("¿Cuál es el río más largo del mundo?","Amazonas","Nilo","Quito","Atrato"));
preguntaCategoria2.push(new PreguntasNivel2("¿¿Cuál es el océano más grande del mundo?","Pacifico","Atlantico","Indico","Antartico"));
preguntaCategoria2.push(new PreguntasNivel2("¿Cual de las siguientes es una de las 7 Maravillas del mundo antioguo","La Gran Pirámide de Giza","Torre Colpatria","Catedral de Sal","Muro de los lamentos"));
preguntaCategoria2.push(new PreguntasNivel2("¿Cuál es el país con más habitantes del mundo?","China","Colombia","Mexico","Medellin"));
preguntaCategoria2.push(new PreguntasNivel2("¿Donde vive el papa de la iglesia catolica?","El Vaticano","Francia","Holanda","Colombia"));

//Introduccion preguntas categoria 3
preguntaCategoria3.push(new PreguntasNivel3("¿Cuál es el río más largo del mundo?","Amazonas","Nilo","Quito","Atrato"));
preguntaCategoria3.push(new PreguntasNivel3("¿¿Cuál es el océano más grande del mundo?","Pacifico","Atlantico","Indico","Antartico"));
preguntaCategoria3.push(new PreguntasNivel3("¿Cual de las siguientes es una de las 7 Maravillas del mundo antioguo","La Gran Pirámide de Giza","Torre Colpatria","Catedral de Sal","Muro de los lamentos"));
preguntaCategoria3.push(new PreguntasNivel3("¿Cuál es el país con más habitantes del mundo?","China","Colombia","Mexico","Medellin"));
preguntaCategoria3.push(new PreguntasNivel3("¿Donde vive el papa de la iglesia catolica?","El Vaticano","Francia","Holanda","Colombia"));

console.log(preguntaCategoria1);
pregunta1=preguntaCategoria1[0];
console.log(pregunta1.preguntaNvl1);

//calculo de aleatorios//
function aleatoriedad(min, maxi)
{
  var resultado;
  resultado=Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}

//Iniciando el juego
nombreUsuario=prompt("Bienvenido a este juego de preguntas!"+"\n"+"Cual es tu nombre")
catPremio=categoriaxPremio[0]
aleatorio=aleatoriedad(0,4);
switch (aleatorio) {
  case 0:
    pregunta=preguntaCategoria1[0];
    resUsuario=prompt ("Primera pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl1 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
    correcta=1
  break;
  
  case 1:
    pregunta=preguntaCategoria1[1];
    resUsuario=prompt ("Primera pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl1 +"\n" + "1) "+pregunta.respError3+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respCorrecta+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
    correcta=4
  break;

  case 2:
    pregunta=preguntaCategoria1[2];
    resUsuario=prompt ("Primera pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl1 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
    correcta=1 
  break;

  case 3:
    pregunta=preguntaCategoria1[3];
    resUsuario=prompt ("Primera pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl1 +"\n" + "1) "+pregunta.respError2+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respCorrecta +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
    correcta=3
  break;

  case 4:
    pregunta=preguntaCategoria1[4];
    resUsuario=prompt ("Primera pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl1 +"\n" + "1) "+pregunta.respError1+ "\n"+  "2) "+pregunta.respCorrecta+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
    correcta=2 
  break;   
}
//fin inicializacion del juego

//haciendo el juego continuo
//pregunta 2
if (resUsuario==correcta) {
  victoria=victoria+1;
  acumuladoPuntos=acumuladoPuntos+catPremio.premio
  alert("Felicidades, ahora aumentaremos la dificultad")
 //segunda pregunta - categoria 2 
  aleatorio=aleatoriedad(0,4);
  catPremio=categoriaxPremio[1];
  
  switch (aleatorio) {
    case 0:
      pregunta=preguntaCategoria2[0];
      resUsuario=prompt ("Segunda pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl2 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=1
    break;
      
    case 1:
      pregunta=preguntaCategoria2[1];
      resUsuario=prompt ("Segunda pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl2 +"\n" + "1) "+pregunta.respError3+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respCorrecta+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=4
    break;
  
    case 2:
      pregunta=preguntaCategoria2[2];
      resUsuario=prompt ("Segunda pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl2 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=1 
    break;
  
    case 3:
      pregunta=preguntaCategoria2[3];
      resUsuario=prompt ("Segunda pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl2 +"\n" + "1) "+pregunta.respError2+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respCorrecta +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=3
    break;
 
    case 4:
     pregunta=preguntaCategoria2[4];
     resUsuario=prompt ("Segunda pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl2 +"\n" + "1) "+pregunta.respError1+ "\n"+  "2) "+pregunta.respCorrecta+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
     correcta=2 
    break;   
 }
}
 
if (resUsuario==correcta) {
  victoria=victoria+1;
  acumuladoPuntos=acumuladoPuntos+catPremio.premio
  alert("Felicidades, ahora aumentaremos la dificultad")
  console.log("victorias acumuladas"+victoria);
  //pregunta 3
  aleatorio=aleatoriedad(0,4);
  catPremio=categoriaxPremio[2];
  switch (aleatorio) {
    case 0:
     pregunta=preguntaCategoria3[0];
     resUsuario=prompt ("Tercer pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl3 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
     correcta=1
    break;
     
    case 1:
      pregunta=preguntaCategoria3[1];
      resUsuario=prompt ("Tercer pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl3 +"\n" + "1) "+pregunta.respError3+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respCorrecta+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=4
    break;
 
    case 2:
      pregunta=preguntaCategoria3[2];
      resUsuario=prompt ("Tercer pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl3 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=1 
    break;
 
    case 3:
      pregunta=preguntaCategoria3[3];
      resUsuario=prompt ("Tercer pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl3 +"\n" + "1) "+pregunta.respError2+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respCorrecta +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=3;
    break;

    case 4:
      pregunta=preguntaCategoria3[4];
      resUsuario=prompt ("Tercer pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl3 +"\n" + "1) "+pregunta.respError1+ "\n"+  "2) "+pregunta.respCorrecta+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
      correcta=2 
    break;   
             
  }
}
 
if (resUsuario==correcta) {
  victoria=victoria+1;
  acumuladoPuntos=acumuladoPuntos+catPremio.premio
  alert("Felicidades, ahora aumentaremos la dificultad")

}
//condiciones final de juego

  //condicion de respuesta erronea
/*if (victoria>=8)
alert ("Eres el campeon de este juego" +"\n" +"FELICITACIONES")
else {
  alert("lo sentimos, perdiste")
  alert("siempre lo puedes volver a intentar")
}
console.log("victorias acumuladas"+victoria);*/
//fin del juego
document.write(nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.");
    
//agregar opcion de si deseas seguir jugando por mas dinero//
//agregar premio//
//Creación de objetos de entidades; ronda, jugador, categoría, premio,pregunta,
//opciones, etc...//
//agregar boton de iniciar el juego
//5 preguntas 5 categorias//
//indicar que la respuesta es solo el numero o letra//
// si se retira debe quedar con su premio y si pierde pierde todo//