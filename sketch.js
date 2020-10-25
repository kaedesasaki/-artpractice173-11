//ClickedSprites
	var pumpkins;
	var sheeps ;
        var kiki;
	
function setup() {
  createCanvas(1000,1000); 
  pumpkins = new Group();
  sheeps = new Group();
  kiki = new Group();
	 
  for(var i=0 ; i<7 ; i++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("pumpkins", "assets/pumpkin10.png","assets/pumpkin15.png");
    sprite.velocity.y = 1; 
    pumpkins.add(sprite);
    sprite.setCollider("circle", 0,0,16); //コライダーの範囲を設定する
    sprite.onMousePressed = function() { //スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
	  }
	}
	
  for(var j=0 ; j<7 ; j++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("sheeps", "assets/sheep10.png","assets/sheep15.png");
    sprite.velocity.y = 3;//速度を3に設定
    sheeps.add(sprite);
    sprite.setCollider("circle", 0,0,16); //コライダーの範囲を設定する
    sprite.onMousePressed = function() {//スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
    }
  }
	

for(var k=0 ; k<7 ; k++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("kiki", "assets/kiki1.png","assets/kiki4.png");
    sprite.velocity.y = 5; //速度を5に設定
    kiki.add(sprite);
    sprite.setCollider("circle", 0,0,50);  //コライダーの範囲を設定する
    sprite.onMousePressed = function() { //スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
    }
  }
}
	
function draw() {
  background(255);
  for(var i = 0; i<pumpkins.length; i++) {
    var p = pumpkins[i];
    if(p.position.y > height)
      p.position.y = 0;
  }
  for(var j = 0; j<sheeps.length; j++) {
    var s = sheeps[j];
    if(s.position.y > height)
      s.position.y = 0;
  }

for(var k = 0; k<kiki.length; k++) {
    var g = kiki[k];
    if(g.position.y > height)
    g.position.y = 0;
  }
  drawSprites();
}
