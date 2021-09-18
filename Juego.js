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
class PreguntasNivel4
{
  constructor(pn4,r1,r2,r3,r4)
  {
    this.preguntaNvl4=pn4;
    this.respCorrecta=r1;
    this.respError1=r2;
    this.respError2=r3;
    this.respError3=r4;
  }
}
class PreguntasNivel5
{
  constructor(pn5,r1,r2,r3,r4)
  {
    this.preguntaNvl5=pn5;
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

//creacion caja de preguntas,categoria y premios
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
var continuidad=0;
var resultado;

//Boton para iniciar juego//
var btn=document.getElementById('Iniciar');
btn.addEventListener("click",iniciarJuego);

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
preguntaCategoria2.push(new PreguntasNivel2("¿Cuantos continentes tiene el planeta Tierra?","5","2","3","12"));
preguntaCategoria2.push(new PreguntasNivel2("¿Cuantos minutos tiene una hora?","60","100","120","62"));
preguntaCategoria2.push(new PreguntasNivel2("¿Cual es el antonimo de rico?","Pobre","Delgado","Super rico","Billonario"));
preguntaCategoria2.push(new PreguntasNivel2("¿Cuantas horas tienen dos dia?","48","72","24","36"));
preguntaCategoria2.push(new PreguntasNivel2("¿En que estacion del año suele nevar?","Invierno","Otoño","Primavera","Verano"));

//Introduccion preguntas categoria 3
preguntaCategoria3.push(new PreguntasNivel3("¿Cuál es el río más largo del mundo?","Amazonas","Nilo","Quito","Atrato"));
preguntaCategoria3.push(new PreguntasNivel3("¿Cuál es el océano más grande del mundo?","Pacifico","Atlantico","Indico","Antartico"));
preguntaCategoria3.push(new PreguntasNivel3("¿Cual de las siguientes es una de las 7 Maravillas del mundo antioguo","La Gran Pirámide de Giza","Torre Colpatria","Catedral de Sal","Muro de los lamentos"));
preguntaCategoria3.push(new PreguntasNivel3("¿Cuál es el país con más habitantes del mundo?","China","Colombia","Mexico","Medellin"));
preguntaCategoria3.push(new PreguntasNivel3("¿Donde vive el papa de la iglesia catolica?","El Vaticano","Francia","Holanda","Colombia"));

//Introduccion preguntas categoria 4
preguntaCategoria4.push(new PreguntasNivel4("¿En que año llego Cristobal Colon a America?","1492","1493","1494","1490"));
preguntaCategoria4.push(new PreguntasNivel4("¿Cuantos lados tiene un Heptagono?","7","8","9","6"));
preguntaCategoria4.push(new PreguntasNivel4("¿Cual es el planeta mas grande del sistema solar","Jupiter","Saturno","Tierra","Urano"));
preguntaCategoria4.push(new PreguntasNivel4("¿Cuál es el animal mas grande de la tierra?","Ballena azul","Jirafa","Cachalote","Tortuga Gigante"));
preguntaCategoria4.push(new PreguntasNivel4("¿Cuantos huesos tiene el cuerpo humano?","206","216","48","301"));

//Introduccion preguntas categoria 5
preguntaCategoria5.push(new PreguntasNivel5("¿Cual es la pelicula mas taquillera de la historia?","Advenger:Endgame","Matrix 2","Avatar","Toy Story 4"));
preguntaCategoria5.push(new PreguntasNivel5("¿Quien gano el mundial de futbol de 2010?","España","Brasil","Italia","Argentina"));
preguntaCategoria5.push(new PreguntasNivel5("¿Cuando se invento la imprenta","1440","1640","1715","1940"));
preguntaCategoria5.push(new PreguntasNivel5("¿Cuantos corazones tiene un gusano de tierra?","5","10","2","3"));
preguntaCategoria5.push(new PreguntasNivel5("¿Cual fue la primer pelicula de Disney?","Blancanieves","La Cenicienta","La bella y la bestia","Las aventuras de Micky Mouse"));

//calculo de aleatorios//
function aleatoriedad(min, maxi)
{
  var resultado;
  resultado=Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}

//Inicio del juego
function iniciarJuego()
{
  nombreUsuario=prompt("Bienvenido a este juego de preguntas!"+"\n"+"Cual es tu nombre")
  catPremio=categoriaxPremio[0]
  aleatorio=aleatoriedad(0,4);
  switch (aleatorio) 
  {
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
  if (resUsuario==correcta)
  {
    victoria=victoria+1;
    acumuladoPuntos=acumuladoPuntos+catPremio.premio;
    alert("Felicidades, ahora aumentaremos la dificultad");
    catPremio=categoriaxPremio[1];
    continuidad=prompt("¿Deseas seguir jugando?"+"\n"+ "Si aciertas en la siguiente ronda ganaras "+ catPremio.premio+" puntos"+"\n"+"Si fallas, pierdes todo"+"\n"+"\n"+nombreUsuario+" si te retiras ahora te vellaras: "+acumuladoPuntos+" puntos."+"\n"+ "Registra 1 para continuar o 2 para retirarte con tus puntos");
    aleatorio=aleatoriedad(0,4);
    if(continuidad==1)
    { 
      //pregunta 2
      switch (aleatorio) 
      {
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
      
      if (resUsuario==correcta) {
        victoria=victoria+1;
        acumuladoPuntos=acumuladoPuntos+catPremio.premio;
        alert("Felicidades, ahora aumentaremos la dificultad");
        catPremio=categoriaxPremio[2];
        continuidad=prompt("¿Deseas seguir jugando?"+"\n"+ "Si aciertas en la siguiente ronda ganaras "+ catPremio.premio+" puntos"+"\n"+"Si fallas, pierdes todo"+"\n"+"\n"+nombreUsuario+" si te retiras ahora te vellaras: "+acumuladoPuntos+" puntos."+"\n"+ "Registra 1 para continuar o 2 para retirarte con tus puntos");
        aleatorio=aleatoriedad(0,4);
        if(continuidad==1)
        { 
          //pregunta 3
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
        
          if (resUsuario==correcta) 
          {
            victoria=victoria+1;
            acumuladoPuntos=acumuladoPuntos+catPremio.premio
            alert("Felicidades, ahora aumentaremos la dificultad")
            catPremio=categoriaxPremio[3];
            continuidad=prompt("¿Deseas seguir jugando?"+"\n"+ "Si aciertas en la siguiente ronda ganaras "+ catPremio.premio+" puntos"+"\n"+"Si fallas, pierdes todo"+"\n"+"\n"+nombreUsuario+" si te retiras ahora te vellaras: "+acumuladoPuntos+" puntos."+"\n"+ "Registra 1 para continuar o 2 para retirarte con tus puntos");
            aleatorio=aleatoriedad(0,4);
            //pregunta 4
            if(continuidad==1)
            { 
              switch (aleatorio) 
              {
                case 0:
                pregunta=preguntaCategoria4[0];
                resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl4 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                correcta=1
                break;
                
                case 1:
                  pregunta=preguntaCategoria4[1];
                  resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl4 +"\n" + "1) "+pregunta.respError3+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respCorrecta+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                  correcta=4
                break;
          
                case 2:
                  pregunta=preguntaCategoria4[2];
                  resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl4 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                  correcta=1 
                break;
          
                case 3:
                  pregunta=preguntaCategoria4[3];
                  resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl4 +"\n" + "1) "+pregunta.respError2+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respCorrecta +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                  correcta=3;
                break;
          
                case 4:
                  pregunta=preguntaCategoria4[4];
                  resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl4 +"\n" + "1) "+pregunta.respError1+ "\n"+  "2) "+pregunta.respCorrecta+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                  correcta=2; 
                break;   
              } 
            
              if (resUsuario==correcta) 
              {
                victoria=victoria+1;
                acumuladoPuntos=acumuladoPuntos+catPremio.premio
                alert("Felicidades, ahora aumentaremos la pregunta FINAL")
                aleatorio=aleatoriedad(0,4);
                catPremio=categoriaxPremio[4];
                continuidad=prompt("¿Deseas seguir jugando?"+"\n"+ "Si aciertas en la siguiente ronda ganaras "+ catPremio.premio+" puntos"+"\n"+"Si fallas, pierdes todo"+"\n"+"\n"+nombreUsuario+" si te retiras ahora te vellaras: "+acumuladoPuntos+" puntos."+"\n"+ "Registra 1 para continuar o 2 para retirarte con tus puntos");
                aleatorio=aleatoriedad(0,4);
                //pregunta 5
                if(continuidad==1)
                { 
                  switch (aleatorio) 
                  {
                    case 0:
                    pregunta=preguntaCategoria5[0];
                    resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl5 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                    correcta=1
                    break;
                  
                    case 1:
                      pregunta=preguntaCategoria5[1];
                      resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl5 +"\n" + "1) "+pregunta.respError3+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respCorrecta+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                      correcta=4
                    break;
                  
                    case 2:
                      pregunta=preguntaCategoria5[2];
                      resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl5 +"\n" + "1) "+pregunta.respCorrecta+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                      correcta=1 
                    break;
                  
                    case 3:
                      pregunta=preguntaCategoria5[3];
                      resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl5 +"\n" + "1) "+pregunta.respError2+ "\n"+  "2) "+pregunta.respError1+"\n"+ "3) "+pregunta.respCorrecta +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                      correcta=3;
                    break;
                  
                    case 4:
                      pregunta=preguntaCategoria5[4];
                      resUsuario=prompt ("Cuarta pregunta"+"\n"+catPremio.categoria+ ", si aciertas ganaras "+ catPremio.premio+" puntos"+"\n"+pregunta.preguntaNvl5 +"\n" + "1) "+pregunta.respError1+ "\n"+  "2) "+pregunta.respCorrecta+"\n"+ "3) "+pregunta.respError2 +"\n"  +"4) "+pregunta.respError3+"\n"+"\n"+nombreUsuario+" tienes acumulados: "+acumuladoPuntos+" puntos.");
                      correcta=2; 
                    break;   
                  }
                  if (resUsuario==correcta) 
                  {
                    victoria=victoria+1;
                    acumuladoPuntos=acumuladoPuntos+catPremio.premio
                    alert("Felicidades, Haz ganado el juego!!")
                  }
                  else//fallar ultima pregunta
                  {
                    alert("Lo sentimos, perdiste"+"\n"+"Siempre lo puedes volver a intentar")
                    acumuladoPuntos=0;
                  }
                }
                else//no continuar despues de la pregunta 4
                {
                  alert("Te retiras con: "+acumuladoPuntos+" puntos.");  
                  //document.write(nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.");  
                }
              }  
              else//fallar pregunta 4
              {
                alert("Lo sentimos, perdiste"+"\n"+"Siempre lo puedes volver a intentar")
                acumuladoPuntos=0;
              }
            }
            else//no continuar despues de pregunta 3
            {
              alert("Te retiras con: "+acumuladoPuntos+" puntos.");  
            //  document.write(nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.");  
            }
          }  
          else//fallar pregunta 3
          {
            alert("Lo sentimos, perdiste"+"\n"+"Siempre lo puedes volver a intentar")
            acumuladoPuntos=0;
          }
        }
        else//no continuar despues de pregunta 2
        {
          alert("Te retiras con: "+acumuladoPuntos+" puntos.");  
          //document.write(nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.");  
        }
      }  
      else//fallar pregunta 2
      {
        alert("Lo sentimos, perdiste"+"\n"+"Siempre lo puedes volver a intentar")
        acumuladoPuntos=0;
      }
    }
    else//no continuar despues de pregunta 1
    {
      alert("Te retiras con: "+acumuladoPuntos+" puntos.");  
      //document.write(nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.");  
    }
  }  
  else//fallar pregunta 1
  {
    alert("Lo sentimos, perdiste"+"\n"+"Siempre lo puedes volver a intentar")
    acumuladoPuntos=0;
  }
console.log("victorias acumuladas"+victoria);
  //fin del juego
document.getElementById('resultado1').innerHTML=nombreUsuario+" ganastes  un total de: "+acumuladoPuntos+" puntos.";
document.getElementById('resultado2').innerHTML="obtuvistes  un total de: "+victoria+"respuestas correctas.";
}      



//agregar opcion de si deseas seguir jugando por mas dinero//
//agregar premio//
//Creación de objetos de entidades; ronda, jugador, categoría, premio,pregunta,
//opciones, etc...//
//agregar boton de iniciar el juego
//5 preguntas 5 categorias//
//indicar que la respuesta es solo el numero o letra//
// si se retira debe quedar con su premio y si pierde pierde todo//