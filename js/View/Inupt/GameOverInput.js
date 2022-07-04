class GameOverInput {
    
    constructor()
    {

    }
    
    gameOver() 
    {
        var name = prompt('You have won the game!\nEnter your name to play again', 'Anonymous');
        location.reload();
        return name ? name : 'Anonymous';
    }
}