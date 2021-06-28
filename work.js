
const GAMETRON = document.querySelector('#game_prompt')
const BASEELEMENT = document.querySelectorAll('#card')

BASEELEMENT.forEach(function(card){
    card.addEventListener('click', function(event){
        if (secretNumber == event.innerHTML){
            GAMETRON.innerHTML = "You Win"
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
    
    changeTron: function (){
        GAMETRON.innerHTML = this.secretNumber
    },

    start: function(){
        this.setSecretNumber(this.getRandom(100,1))
        this.changeTron()
    }
}

game.start()



