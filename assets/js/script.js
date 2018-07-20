var c = document.getElementById('ultimateBread');
var ctx = c.getContext('2d');
var positionArm = {
  x:-9,
  y:3
};
//le visage function et variable
var lastTime = (new Date()).getTime();
var currentTime = 0;
var delta = 0;
//
var armRotate = 0;
var imgKey = new Image();
var imgHarpon = new Image();
var imgDay = new Image();
var imgNight = new Image();
var imgSun = new Image();
var imgMoon = new Image();
var currentTheme = true;
var img = new Image();
var particles = {},
particleIndex = 0,
settings = {
  density: 20,
  particleSize: 4,
  gravity: 0.5
};
//PARTICLE
function Particle(sizeX,x,y) {
  this.opacity = 0;
  this.colors = [
    {
      red:255,
      green:0,
      blue:0
    },
    {
      red:255,
      green:153,
      blue:0
    },
    {
      red:255,
      green:255,
      blue:0
    }];
    this.randColor = Math.round(Math.random() * 100);
    this.currentColor = 0;
    if(this.randColor < 50){
      this.currentColor = 0;
    }else if(this.randColor < 85){
      this.currentColor = 1;
    }else{
      this.currentColor = 2;
    }
    this.randomX = Math.random();
    this.x = x + this.randomX * sizeX - sizeX/2;
    this.y = y;
    this.vx = (this.randomX * sizeX - sizeX/2> 0) ? -this.x/250 : this.x/250;
    this.vy = Math.random() * 15 ;
    particleIndex ++;
    particles[particleIndex] = this;
    this.id = particleIndex;
    this.life = 0;
    this.maxLife = 15;
  }
  //
  Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;
    var fadeInSpeed = 15;
    if(this.life < fadeInSpeed){
      this.opacity += 1/fadeInSpeed/2;
    }
    this.vy += settings.gravity;
    this.life++;
    if (this.life >= this.maxLife) {
      delete particles[this.id];
    }
    ctx.beginPath();
    ctx.fillStyle=createColor(this.colors[this.currentColor].red,this.colors[this.currentColor].green,this.colors[this.currentColor].blue,this.opacity);
    ctx.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
  //
  function createColor(red,green,blue,alpha){
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }
  //function pour les screws
function screw(positionXS,positionYS,rs){
  ctx.beginPath();
  ctx.arc(positionXS,positionYS,rs,0,Math.PI*2,true);
  ctx.fillStyle = 'gold';
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(positionXS,positionYS+rs-(0.2*rs));
  ctx.lineTo(positionXS,positionYS-rs+(0.2*rs));
  ctx.moveTo(positionXS+rs-(0.2*rs),positionYS);
  ctx.lineTo(positionXS-rs+(0.2*rs),positionYS);
  ctx.strokeStyle = ' #cd9f04';
  ctx.stroke();
  ctx.closePath();
}
function changeTheme(){
  currentTheme =! currentTheme;
}
function init(){
  imgKey.src='assets/js/clé.png'
  imgHarpon.src='assets/js/harpondbatar.png'
  imgNight.src='assets/js/nuit.jpg';
  imgDay.src='assets/js/jour.jpeg';
  imgMoon.src='assets/js/moon.png';
  img.src='assets/js/pain.png';
  imgSun.src='assets/js/sun.png';
  window.requestAnimationFrame(draw);
}
function draw(){
  currentTime = (new Date()).getTime();
  delta = (currentTime - lastTime) / 1000;
  lastTime = currentTime;
  var positionY = -100;
  var positionX = -200;
  var time = new Date();
  ctx.clearRect(0,0,600,500);
  if (currentTheme) {
    ctx.drawImage(imgDay,0,0,500,500);
    ctx.drawImage(imgHarpon,20,60,80,250);
    //ceinture
    ctx.beginPath();
    ctx.moveTo(150,300);
    ctx.lineTo(250,300);
    ctx.lineTo(250,305);
    ctx.lineTo(150,305);
    ctx.fillStyle='#6d0c1a';
    ctx.fill();
    ctx.closePath();
    //boucle de la ceinture
    ctx.beginPath();
    ctx.moveTo(195,297);
    ctx.lineTo(205,297);
    ctx.lineTo(205,307);
    ctx.lineTo(195,307);
    ctx.fillStyle='silver';
    ctx.fill();
    ctx.closePath();


    //le molet du poney
    ctx.beginPath();
    ctx.moveTo(153,305);
    ctx.quadraticCurveTo(143,325,165,360);
    ctx.lineTo(185,360);
    ctx.quadraticCurveTo(203,325,193,305  );
    ctx.closePath()
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    // la pate du poney
    ctx.beginPath();
    ctx.moveTo(173,380);
    ctx.lineTo(178,380);
    ctx.lineTo(178,430);
    ctx.lineTo(173,430);
    ctx.lineTo(173,380);
    ctx.closePath();
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    //la rotule du poney
    ctx.beginPath();
    ctx.moveTo(165,360);
    ctx.quadraticCurveTo(165,370,173,380);
    ctx.lineTo(178,380);
    ctx.quadraticCurveTo(185,370,185,360);
    ctx.closePath();
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    //le pied du poney
    ctx.beginPath();
    ctx.moveTo(170,430);
    ctx.lineTo(180,430);
    ctx.quadraticCurveTo(187,437,186,440);
    ctx.lineTo(164,440);
    ctx.quadraticCurveTo(163,437,170,430)
    ctx.fillStyle='grey';
    ctx.fill();


    //le molet du poney
    ctx.beginPath();
    ctx.moveTo(208,305);
    ctx.quadraticCurveTo(198,325,220,360);
    ctx.lineTo(240,360);
    ctx.quadraticCurveTo(258,325,248,305  );
    ctx.closePath()
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    // la pate du poney
    ctx.beginPath();
    ctx.moveTo(228,380);
    ctx.lineTo(233,380);
    ctx.lineTo(233,430);
    ctx.lineTo(228,430);
    ctx.lineTo(228,380);
    ctx.closePath();
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    //la rotule du poney
    ctx.beginPath();
    ctx.moveTo(220,360);
    ctx.quadraticCurveTo(220,370,228,380);
    ctx.lineTo(233,380);
    ctx.quadraticCurveTo(240,370,240,360);
    ctx.closePath();
    ctx.fillStyle = '#ad4705';
    ctx.fill();
    //le pied du poney
    ctx.beginPath();
    ctx.moveTo(225,430);
    ctx.lineTo(235,430);
    ctx.quadraticCurveTo(242,437,241,440);
    ctx.lineTo(219,440);
    ctx.quadraticCurveTo(218,437,225,430)
    ctx.fillStyle='grey';
    ctx.fill();
  } else {
    ctx.drawImage(imgNight,0,0,500,500);
    ctx.drawImage(imgKey,-85,30,250,250)
    //La fusée
    ctx.beginPath()
    ctx.moveTo(150,300);
    ctx.lineTo(250,300);
    ctx.lineTo(250,340);
    ctx.lineTo(150,340);
    ctx.fillStyle = 'silver'
    ctx.fill()
    ctx.closePath();
    //base propulseur
    ctx.beginPath();
    ctx.moveTo(150,340);
    ctx.lineTo(250,340);
    ctx.lineTo(290,380);
    ctx.lineTo(110,380);
    ctx.fillStyle = 'silver'
    ctx.fill()
    ctx.closePath();
    //ceinture
    ctx.beginPath();
    ctx.moveTo(150,300);
    ctx.lineTo(250,300);
    ctx.lineTo(250,305);
    ctx.lineTo(150,305);
    ctx.fillStyle='#6d0c1a';
    ctx.fill();
    ctx.closePath();
    //boucle de la ceinture
    ctx.beginPath();
    ctx.moveTo(195,297);
    ctx.lineTo(205,297);
    ctx.lineTo(205,307);
    ctx.lineTo(195,307);
    ctx.fillStyle='silver';
    ctx.fill();
    ctx.closePath();
    //propulseur 1
    ctx.beginPath();
    ctx.moveTo(120,380);
    ctx.lineTo(150,380);
    ctx.lineTo(150,390);
    ctx.lineTo(120,390);
    ctx.fillStyle = 'darkgrey'
    ctx.fill()
    ctx.closePath();
    //propulseur 2
    ctx.beginPath();
    ctx.moveTo(180,380);
    ctx.lineTo(220,380);
    ctx.lineTo(220,390);
    ctx.lineTo(180,390);
    ctx.fillStyle = 'darkgrey'
    ctx.fill()
    ctx.closePath();
    //propulseur 3
    ctx.beginPath();
    ctx.moveTo(250,380);
    ctx.lineTo(280,380);
    ctx.lineTo(280,390);
    ctx.lineTo(250,390);
    ctx.fillStyle = 'darkgrey'
    ctx.fill()
    ctx.closePath();
    //
    screw(243,313,4);
    screw(243,337,4);
    screw(157,313,4);
    screw(157,337,4);
    for (var i = 0; i < settings.density; i++) {
      new Particle(160,200,390);
      new Particle(30,135,390);
      new Particle(30,265,390);
      new Particle(40,200,390);
    }
    for (var i in particles) {
      particles[i].draw();
    }
  }
  //les bras
  ctx.beginPath();
  ctx.strokeStyle='brown';
  ctx.moveTo(50,160);
  ctx.lineTo(250,160);
  ctx.moveTo(250,160);
  ctx.lineTo(300,160);
  ctx.lineWidth='30';
  ctx.strokeStyle='brown';
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();
  //avant bras
  ctx.save();
  ctx.beginPath();
  // ctx.rotate(((Math.PI*2)/-60000)*time.getMilliseconds());
  armRotate += delta*10;
  ctx.rotate(Math.cos(armRotate)/30);
  ctx.translate(10,0);
  ctx.moveTo(370,140);
  if (currentTheme) {
    ctx.drawImage(imgSun,365,100,65,65);
  } else {
    ctx.drawImage(imgMoon,365,100,65,65);
  }
  ctx.restore();
  ctx.lineTo(300,160);
  ctx.lineWidth='30';
  ctx.strokeStyle='brown';
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();
  //le muscle
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(260,150);
  ctx.quadraticCurveTo(270,130+Math.cos(armRotate)*5,285,145);
  ctx.strokeStyle='brown';
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  //tatoo
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.moveTo(275+positionArm.x,150+positionArm.y+Math.cos(armRotate)*3);
  ctx.quadraticCurveTo(280+positionArm.x,160+positionArm.y+Math.cos(armRotate)*3,290+positionArm.x,150+positionArm.y+Math.cos(armRotate)*3);
  ctx.moveTo(282+positionArm.x,153+positionArm.y+Math.cos(armRotate)*3);
  ctx.lineTo(282+positionArm.x,135+positionArm.y+Math.cos(armRotate)*3);
  ctx.moveTo(277+positionArm.x,140+positionArm.y+Math.cos(armRotate)*3);
  ctx.lineTo(287+positionArm.x,140+positionArm.y+Math.cos(armRotate)*3);
  ctx.strokeStyle='blue';
  ctx.stroke();
  ctx.restore();
  //le tronc
  //corp
  ctx.beginPath();
  ctx.moveTo(150,170);
  ctx.lineTo(250,170);
  ctx.lineTo(250,300);
  ctx.lineTo(150,300);
  ctx.fillStyle = 'brown';
  ctx.fill();
  //abdominaux
  ctx.beginPath();
  ctx.lineWidth='2';
  ctx.moveTo(175,220);
  ctx.lineTo(175,280);
  ctx.moveTo(225,220);
  ctx.lineTo(225,280);
  ctx.moveTo(200,220);
  ctx.lineTo(200,280);
  ctx.moveTo(175,220);
  ctx.quadraticCurveTo(185,230,200,220);
  ctx.moveTo(200,220);
  ctx.quadraticCurveTo(215,230,225,220);
  ctx.moveTo(175,240);
  ctx.quadraticCurveTo(185,250,200,240);
  ctx.moveTo(200,240);
  ctx.quadraticCurveTo(215,250,225,240);
  ctx.moveTo(175,260);
  ctx.quadraticCurveTo(185,270,200,260);
  ctx.moveTo(200,260);
  ctx.quadraticCurveTo(215,270,225,260);
  ctx.moveTo(175,280);
  ctx.quadraticCurveTo(185,290,200,280);
  ctx.moveTo(200,280);
  ctx.quadraticCurveTo(215,290,225,280);
  ctx.strokeStyle ='#8e2323';
  ctx.stroke();
  //les boules
  ctx.save();
  ctx.beginPath();
  ctx.arc(180,180+Math.cos(armRotate)*2,6,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fillStyle ='purple';
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.arc(220,180+Math.cos(armRotate + Math.PI)*2,6,0,Math.PI*2,true);
  ctx.lineTo(225,280);
  ctx.fillStyle ='purple';
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  //le bas
  //Le pentalon
  /*ctx.beginPath();
  ctx.moveTo(150,300);
  ctx.lineTo(250,300);
  ctx.lineTo(250,380);
  ctx.lineTo(150,380);
  ctx.fillStyle='#010059';
  ctx.fill();
  ctx.closePath();
  //arrondi entre les jambes
  ctx.beginPath();
  ctx.moveTo(200,380);
  ctx.lineTo(200,340);
  ctx.lineWidth='30';
  ctx.strokeStyle='rgba(255,255,255,0.1)';
  ctx.stroke();*/


  //pectoraux
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.moveTo(155,175);
  ctx.quadraticCurveTo(185,205+Math.cos(armRotate)*3,195,175);
  ctx.strokeStyle ='#8e2323';
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  //
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.moveTo(205,175);
  ctx.quadraticCurveTo(215,205+Math.cos(armRotate +Math.PI)*3,245,175);
  ctx.strokeStyle ='#8e2323';
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  //le V
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.moveTo(151,280);
  ctx.quadraticCurveTo(160,295,170,299);
  ctx.strokeStyle ='#8e2323';
  ctx.stroke();
  ctx.closePath();
  //v2
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.moveTo(249,280);
  ctx.quadraticCurveTo(240,295,230,299);
  ctx.strokeStyle ='#8e2323';
  ctx.stroke();
  ctx.closePath();






  ctx.save();
  ctx.translate(195,113);
  ctx.rotate(((Math.PI*2)/1.2)*time.getSeconds()+((Math.PI*2)/1200)*time.getMilliseconds());
  ctx.drawImage(img,-50,-50,100,100.735 );
  //les yeux fond blanc gauche
  ctx.beginPath();
  ctx.arc(170+positionX,103+positionY,8,0,Math.PI*2,true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();

  //fond blanc droite
  ctx.beginPath();
  ctx.arc(210+positionX,103+positionY,8,0,Math.PI*2,true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
  //La bouche
  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.moveTo(175+positionX,125+positionY);
  ctx.quadraticCurveTo(200+positionX,140+positionY,205+positionX,125+positionY);
  ctx.moveTo(175+positionX,125+positionY);
  ctx.quadraticCurveTo(200+positionX,125+positionY,205+positionX,125+positionY);
  ctx.strokeStyle='red';
  ctx.stroke();
  //cicatrice
  ctx.beginPath();
  ctx.lineWidth = '3';
  ctx.moveTo(225+positionX,115+positionY);
  ctx.lineTo(225+positionX,127+positionY);
  ctx.moveTo(221+positionX,118+positionY);
  ctx.lineTo(229+positionX,118+positionY);
  ctx.moveTo(221+positionX,123+positionY);
  ctx.lineTo(229+positionX,123+positionY);
  ctx.strokeStyle = 'grey';
  ctx.stroke();
  //pupille gauche
  ctx.beginPath();
  var randomX = (time.getMilliseconds()%100>=50)? Math.random() : randomX;
  var randomY = (time.getMilliseconds()%100>=50)? Math.random() : randomY;
  ctx.translate(randomX*10 -5 ,randomY*10 -5);
  ctx.arc(170+positionX,103+positionY,3,0,Math.PI*2,true);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
  //pupille droite
  ctx.beginPath();
  ctx.arc(212+positionX,103+positionY,3,0,Math.PI*2,true);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  window.requestAnimationFrame(draw);
}
init();
