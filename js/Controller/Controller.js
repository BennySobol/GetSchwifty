class Controller {
    constructor(_model, _view, _gameLogic)
    {
      this.model = _model;
      this.view = _view;
      this.gameController = _gameLogic;
  
      this.view.board.renderBoard(this.gameController.board);
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
            setTimeout("alert('You have won the game!');", 1);
        }
    }
}