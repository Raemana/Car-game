class Game{
    constructor(){

    }
    getState(){
    var gameref = database.ref('gameState')
    gameref.on("value",function(data){
        gameState = data.val();
    })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if (gameState === 0) {
         player = new Player();
         var countref = await database.ref('playerCount').once("value");
         if (countref.exists()) {
             playerCount = countref.val();
             player.getCount();
         }
         form = new Form();
         form.display();
          
        }
    }
    play(){
      form.hide();
      textSize(15);
      text("game has started",202,54);
      Player.playerInfo();
      if (playerInfo !== undefined) {
          var displayPosition = 121;
          for(var plr in playerInfo){
              if (plr === "player" + player.index) {
               fill("blue")    
              }
              else{
                  fill("purple");
              }
              displayPosition += 24;
              textSize(16);
              text(playerInfo[plr].name + "=" + playerInfo[plr].distance,121,displayPosition);
          }
      }
      if (keyIsDown(UP_ARROW) && player.index !== null) {
       player.distance += 46;
       player.update();   
      }
    }
}