
const GAMETRON = document.querySelector('#game_prompt')
const BASEELEMENT = document.querySelectorAll('#card')

BASEELEMENT.forEach(function(card){
    card.addEventListener('click', function(event){
        game.changeColor(card, card.innerHTML )
            if(card.innerHTML == game.secretNumber){
                GAMETRON.innerHTML = 'You Win ! ! !'
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
                card.setAttribute("style","background-color: red;")
            } else if (difference >= 5 && difference < 10){
                card.setAttribute("style", "background-color: orange;")
            }
            else if (difference >= 10 && difference < 15){
                card.setAttribute("style","background-color: aquamarine")
            } else if (difference >= 15 && difference < 20){
                card.setAttribute("style","background-color:aqua;")
            } else if (difference >= 20 && difference < 30){
                card.setAttribute("style","background-color:celeste;")
            } else if  (difference >= 30 && difference < 50){  
                card.setAttribute("style","background-color:light-cyan;")
            } else if(difference > 50){
                card.setAttribute("style", "background-color: white;")
            }
    },

    start: function(){
        this.setSecretNumber(this.getRandom(100,1))
        this.resetTron()
    }

}

game.start()



