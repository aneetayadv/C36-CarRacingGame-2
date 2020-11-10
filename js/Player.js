class Player{
    constructor(){

    }

    getCount(){
        var playerRef = db.ref('playerCount');
            playerRef.on("value",function(data){
            playerCount = data.val();
            console.log(playerCount);
        });
    }

    updateCount(count){
        db.ref('/').update({
            'playerCount' : count
        });
    }

    update(name){
        var playerIndex = "player" + playerCount;
        console.log(playerIndex);
        db.ref(playerIndex).set({
            name : name
        })
    }
}