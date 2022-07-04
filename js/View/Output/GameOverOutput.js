class GameOverOutput {
    
    constructor()
    {

    }
    
    printGameOver() 
    {
        setTimeout("alert('You have won the game! Click OK to play again');", 1);
        location.reload();
    }
}