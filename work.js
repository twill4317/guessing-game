
const GAMETRON = document.querySelector('#game_prompt')
const BASEELEMENT = document.querySelectorAll('#card')

BASEELEMENT.forEach(function(card){
    card.addEventListener('click', function(event){
        game.changeColor(card, card.innerHTML )
            if(card.innerHTML == game.secretNumber){
                GAMETRON.innerHTML = 'Aight, you got it fam!'
            }
        })
    })


const game = { 
    secretNumber:0,

    getRandom: function(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min )
    },

    setSecretNumber: function(number) {
        this.secretNumber = number
    },
    
    resetTron: function (){
        GAMETRON.innerHTML = 'Guess my number ("/)'
    },

    changeColor: function(card,numtwo){
        difference = Math.abs(game.secretNumber - numtwo)
        
            if(difference == 0){
                card.setAttribute("style","background-color: gold;")
            } else if (difference >= 1 && difference < 5) {
                GAMETRON.innerHTML = "Damn! you lit"
                card.setAttribute("style","background-color: red;")
            } else if (difference >= 5 && difference < 10){
                GAMETRON.innerHTML = "You Cookin' "
                card.setAttribute("style", "background-color: orange;")
            }
            else if (difference >= 10 && difference < 15){
                GAMETRON.innerHTML = "Warmin' up"
                card.setAttribute("style","background-color: aquamarine")
            } else if (difference >= 15 && difference < 20){
                GAMETRON.innerHTML = "That draft tho'"
                card.setAttribute("style","background-color:aqua;")
            } else if (difference >= 20 && difference < 30){
                GAMETRON.innerHTML = "Oh nah, Chill"
                card.setAttribute("style","background-color:aqua;")
            } else if  (difference >= 30 && difference < 50){  
                GAMETRON.innerHTML = "Catching a cold!"
                card.setAttribute("style","background-color:aqua;")
            } else if(difference >= 50){
                GAMETRON.innerHTML = "Freeze!"
                card.setAttribute("style", "background-color: white;")
            }
    },

    start: function(){
        this.setSecretNumber(this.getRandom(100,1))
        this.resetTron()
    }

}

game.start()



