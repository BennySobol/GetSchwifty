class View {
    
    constructor(_viewBoard, _boardSizeInput, _gameTypeInput, _gameOverOutput, _pointsTableOutput)
    {
        this.board =_viewBoard;
        this.boardSizeInput = _boardSizeInput;
        this.gameTypeInput = _gameTypeInput;
        this.gameOverOutput = _gameOverOutput;
        this.pointsTableOutput = _pointsTableOutput;
    }

    wonGame = () => this.gameOverOutput.printGameOver();
    getBoardSize = () => this.boardSizeInput.getBoardSize();
    getGameType = () => this.gameTypeInput.getGameType();
    renderPointsTable = (pointsTableArray) => this.pointsTableOutput.renderPointsTable(pointsTableArray);
}