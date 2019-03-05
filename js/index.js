var app = document.getElementById('app');
var delay = 1750;

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Sou curioso')
  .pauseFor(delay)
  .deleteAll()
  .typeString('Sou apaixonado por cores')
  .pauseFor(delay)
  .deleteChars(5)
  .typeString('formas')
  .pauseFor(delay)
  .deleteChars(6)
  .typeString('café')
  .pauseFor(delay)
  .deleteAll()
  .typeString('Pessoas me inspiram')
  .pauseFor(delay/2)
  .deleteAll()
  .typeString('Objetos me fascinam')
  .pauseFor(delay/2)
  .deleteAll()
  .typeString('Estou sempre em busca de algo que seja real')
  .pauseFor(delay/1.5)
  .deleteChars(9)
  .typeString('tenha valor')
  .pauseFor(delay/1.5)
  .deleteChars(11)
  .typeString('faça sentido')
  .pauseFor(delay)
  .deleteAll()
  .typeString('Eu acredito que posso fazer a diferença')
  .pauseFor(2*delay)
  .typeString(' ... e você?')
  .pauseFor(5*delay)
  .start();