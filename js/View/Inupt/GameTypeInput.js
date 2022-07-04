class GameTypeInput 
{
    getGameType() 
    {
        var type = prompt('Enter game mode:\nType "Text" for normal mode or anything else for image mode', 'Text');
        return type == 'Text';
    }
}