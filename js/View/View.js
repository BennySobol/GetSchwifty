class View {
    
    constructor(_viewBoard, _boardSizeInput)
    {
        this.board =_viewBoard;
        this.boardSizeInput = _boardSizeInput
    }

    wonGame() 
    {
        setTimeout("alert('You have won the game!');", 1);
    }

    getBoardSize = () => this.boardSizeInput.getBoardSize();
}