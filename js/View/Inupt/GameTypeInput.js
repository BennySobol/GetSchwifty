class GameTypeInput {
    
    constructor()
    {

    }
    
    getGameType() 
    {
        var type = prompt('Enter game type:\nnumbermatic or any thing else for images', 'numbermatic');
        return type == 'numbermatic';
    }
}