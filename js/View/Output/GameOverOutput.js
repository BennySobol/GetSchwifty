class GameOverOutput {
    
    constructor()
    {

    }
    
    printGameOver() 
    {
        setTimeout("alert('You have won the game!');", 1);
        location.reload();
    }
}