class Controller {
    constructor(_model, _view, _gameLogic)
    {
      this.model = _model;
      this.view = _view;
      this.gameController = _gameLogic;
  
      this.gameType = this.view.getGameType();
      
      let boardSize =  this.gameType ? this.view.getBoardSize() : 3;

      this.gameController.generateNewBoard(boardSize);

      this.view.board.renderBoard(this.gameController.board, this.gameType);
      
      
      this.view.renderPointsTable(this.model.pointsTable.pointsArray);
     
     
      this.view.board.bindOnTileClick(this.onTileClick, this.gameController.board.size)
    }
  
    onTileClick = (index) =>
    {
        if(this.gameController.canMoveTile(index))
        {
            this.view.board.moveTile(index, this.gameController.blunkTileIndex, this.gameController.board.size)
            this.gameController.moveTile(index);
        }
        if(this.gameController.isGameOver())
        {
            let name = this.view.wonGame();
            let gameBoard =  this.gameController.board;
            this.model.addEntry(gameBoard.size, gameBoard.startDate, gameBoard.numOfMoves, this.gameType, name);
        }
    }
}