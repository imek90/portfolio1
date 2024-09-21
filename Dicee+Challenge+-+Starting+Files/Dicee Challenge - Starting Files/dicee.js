function rollDice() {
    var randomNumImg1 = (Math.floor(Math.random() * 6)+1);
    var randomNumImg1String = randomNumImg1.toString();
    var randomNumImg2 = (Math.floor(Math.random() * 6)+1);
    var randomNumImg2String = randomNumImg2.toString();
    document.querySelector(".img1").src = "./images/dice" + randomNumImg1String + ".png";
    document.querySelector(".img2").src = "./images/dice" + randomNumImg2String + ".png";

    const image2 = document.getElementById("image2");
    
    document.querySelector(".img2").onload = function() {       
        setTimeout(function(){
            //Your function here              
        if(randomNumImg1 > randomNumImg2){
        alert("Player 1 Wins!");
        }
        else if (randomNumImg1 < randomNumImg2){
            alert("Player 2 Wins!");
        }
        else if (randomNumImg1 === randomNumImg2){
            alert("It's a Draw!");
        }    
        },2000); 
    }
}
