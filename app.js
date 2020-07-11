
    var friends = ["Sam", "Diana", "Haley", "Adam", "Joe"];
var weapons = ["pencil", "pillow", "ruler", "bottle","ball", "pen", "soap", "coffee mug", "fork", "spoon", "knife", "spatula", "bucket", "laser", "plate", "pan", "rock", "bowling pin", "bb gun", "paper airplane"];
var locations = ["lunch room", "stairwell area", "conference room", "lobby", "parking lot area", "brainstorming room", "fitness room", "shower room", "storage room","roof"];

 function accusationFunc(index){
   
     return function accusationAlert() {
          $("#acc"+(index+1)).click(function () {
        alert("Accusation "+ (index+1) + ": I accuse "+ friends[index%5] +", with the " + weapons[index%20] + " in the " + locations[index%10] + "!");
          })
    };
}

for(var i = 0; i < 100; i++){
    var msg = "<h3 id=acc"+(i+1)+">Accusation "+(i+1)+"</h3>";
    $("body").append(msg);
   accusationFunc(i)();

  
}
                      
                        
                               

                           
