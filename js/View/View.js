class View {
    
    constructor(_viewBoard, _boardSizeInput, _gameTypeInput)
    {
        this.board =_viewBoard;
        this.boardSizeInput = _boardSizeInput
        this.gameTypeInput = _gameTypeInput;
    }

    wonGame() 
    {
        setTimeout("alert('You have won the game!');", 1);
        location.reload();
    }

    getBoardSize = () => this.boardSizeInput.getBoardSize();
    getGameType = () => this.gameTypeInput.getGameType();
}