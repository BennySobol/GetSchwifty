class GameTypeInput {
    
    constructor()
    {

    }
    
    getGameType() 
    {
        var type = prompt('Enter game mode:\nType "numbermatic" for normal mode or anything else for image mode', 'numbermatic');
        return type == 'numbermatic';
    }
}