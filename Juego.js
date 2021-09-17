//creacion de cobjetos//
class preguntasNivel1
{
  constructor(pn1,r1,r2,r3,r4)
    {
    this.preguntaDeNivel1=pn1;
    this.respuestaCorrecta=r1;
    this.respuestaError1=r2;
    this.respuestaError2=r3;
    this.respuestaError3=r4;
    }
}

class preguntasNivel2
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
class preguntasNivel3
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

class preguntasNivel4
{
  constructor(pn4,r1,r2,r3,r4)
  {
    this.preguntaDeNivel4=pn4;  
    this.respuestaCorrecta=r1;
    this.respuestaError1=r2;
    this.respuestaError2=r3;
    this.respuestaError3=r4;
  }
}
class preguntasNivel5
{
  constructor(pn5,r1,r2,r3,r4)
  {
    this.preguntaDeNivel5=pn5;
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

//Introduccion preguntas categoria 1
preguntaCategoria1.push( new preguntasNivel1("Pregunta1","respeuestacorrecta","Respuestaerrada1"));
preguntaCategoria1.push( new preguntasNivel1("Pregunta1"));
preguntaCategoria1.push( new preguntasNivel1("Pregunta1"));
preguntaCategoria1.push( new preguntasNivel1("Pregunta1"));
preguntaCategoria1.push( new preguntasNivel1("Pregunta1"));
console.log(preguntaCategoria1);
//Introduccion preguntas categoria 2
preguntaCategoria2.push( new preguntasNivel2("Pregunta2"));
preguntaCategoria2.push( new preguntasNivel2("Pregunta2"));
preguntaCategoria2.push( new preguntasNivel2("Pregunta2"));
preguntaCategoria2.push( new preguntasNivel2("Pregunta2"));
preguntaCategoria2.push( new preguntasNivel2("Pregunta2"));