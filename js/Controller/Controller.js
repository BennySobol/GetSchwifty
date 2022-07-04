class Controller {
    constructor(_model, _view, _gameLogic)
    {
      this.model = _model;
      this.view = _view;
      this.gameController = _gameLogic;
  
      let gameType = this.view.getGameType();
      
      let boardSize =  gameType ? this.view.getBoardSize() : 3;

      this.gameController.generateNewBoard(boardSize);

      this.view.board.renderBoard(this.gameController.board, gameType);
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
            this.view.wonGame()
        }
    }
}