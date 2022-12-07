var bola, jogador1, jogador2, direita, esquerda, top1, top2, bottom1, bottom2;
var bolaimg, campoimg;
var gamestate=0;
var pontuacao=0;

function preload(){
bolaimg=loadImage("./assets/ball.png");
campoimg=loadImage("./assets/download.png");
}



function setup(){
  createCanvas(600,600);
  bola=createSprite(300,300);
  bola.addImage(bolaimg);
  bola.scale=0.2;
  jogador1=createSprite(200,200,40,30);
  jogador2=createSprite(mouseX,mouseY,40,30);
  direita=createSprite(-5,300,20,600);
  esquerda=createSprite(605,300,20,600);
  top1=createSprite(100,-5,225,20);
  top2=createSprite(500,-5,225,20);
  bottom1=createSprite(100,605,225,20);
  bottom2=createSprite(500,605,225,20);
  jogador1.velocityX=10;
}

function draw(){
  background(campoimg);
  
  bola.bounceOff(jogador1);
  bola.bounceOff(jogador2);
  bola.bounceOff(direita);
  bola.bounceOff(esquerda);
  bola.bounceOff(top1);
  bola.bounceOff(top2);
  bola.bounceOff(bottom1);
  bola.bounceOff(bottom2);
  jogador1.bounceOff(direita);
  jogador1.bounceOff(esquerda);
  if(jogador2.y<19){
    jogador2.x=20
  }
  if(jogador2.y<15){
    jogador2.y=15
  }
  jogador2.x=mouseX;
  jogador2.y=mouseY;
  if(gamestate==0){
    push();
    textSize(25);
    fill("black");
    text("Aperte enter para começar!",150,250);
    pop();
    }
    if(gamestate==1){
      push();
      textSize(20);
      fill("black");
      text("Pontuação:"+pontuacao,470,30);
      pop();
    }
    if(bola.y<-30){
      pontuacao+=1;
      bola.velocityX=0;
      bola.velocityY=0;
      gamestate=0;
    }
    if(gamestate==0){
      gamestate0();
    }
    if(pontuacao==3){
      gamestate2(1);
      gamestate=2;
    }
    if(bola.y>630){
      gamestate2(0);
      gamestate=2;
    }
  drawSprites();
  push();
  fill("blue");
  rectMode(CENTER);
  rect(jogador2.x,jogador2.y,40,30);
  fill("yellow");
  rect(jogador1.x,jogador1.y, 40,30);
  pop();
  console.log(gamestate);
}

function gamestate0(){
  bola.x=300;
  bola.y=300;
  if(keyIsDown(ENTER)){
    bola.velocityX=3;
    bola.velocityY=5;
    gamestate=1;
  }
}
function gamestate2(resultado){
if(resultado==1){
swal({
title:`Vitória!!!`,
text:"Obrigada por jogar!",
imageUrl:"https://thumbs.dreamstime.com/b/%C3%ADcone-dourado-do-copo-do-trof%C3%A9u-estilo-dos-desenhos-animados-85979762.jpg",
imageSize:"150x150",
confirmButtonText:"Ok!"
},
function(isConfirm){
if(isConfirm){
  location.reload();
}})
console.log("vitoria");
}
if(resultado==0){
  swal({
    title:`Fim de Jogo`,
    text:"Obrigada por jogar!",
    imageUrl:"https://images.emojiterra.com/twitter/v13.1/512px/1f62d.png",
    imageSize:"150x150",
    confirmButtonText:"Ok!"
    },
    function(isConfirm){
    if(isConfirm){
      location.reload();
    }})
console.log("derrota");
}
}