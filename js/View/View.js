class View {
    
    constructor(_viewBoard, _boardSizeInput, _gameTypeInput, _gameOverInput, _pointsTableOutput)
    {
        this.board =_viewBoard;
        this.boardSizeInput = _boardSizeInput;
        this.gameTypeInput = _gameTypeInput;
        this.gameOverInput = _gameOverInput;
        this.pointsTableOutput = _pointsTableOutput;
    }

    wonGame = () => { return this.gameOverInput.gameOver()};
    getBoardSize = () => this.boardSizeInput.getBoardSize();
    getGameType = () => this.gameTypeInput.getGameType();
    renderPointsTable = (pointsTableArray) => this.pointsTableOutput.renderPointsTable(pointsTableArray);
}