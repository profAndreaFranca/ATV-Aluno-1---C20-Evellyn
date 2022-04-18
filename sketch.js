const Engine = Matter.Engine // física
const World = Matter.World // criar mundos
const Bodies = Matter.Bodies //criar corpos
const Body = Matter.Body //alterar/setar propriedades dos corpos

let engine;
let world;

var bola;
var solo;
var wedge;
var angle = 60;
var poly;


function setup() {
  createCanvas(500, 500)

  engine = Engine.create() // criando a física do nosso mundo
  world = engine.world //adicionando física ao nosso mundo

  bola_ops={
    isStatic:false,
    restitution:1
  }

  //criando um corpo círcular
  bola = Bodies.circle(250,10,50,bola_ops)
  World.add(world,bola) //adicionando o corpo ao mundo

  //criando um corpo retangular
  solo = Bodies.rectangle(250,480,500,20,{isStatic:true})
  World.add(world,solo)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(0)

  //ativando a física
  Engine.update(engine)

  //desenhando o corpo na tela
  ellipse(bola.position.x,bola.position.y,50)

  rect(solo.position.x,solo.position.y,500,20)
}
