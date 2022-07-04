window.addEventListener("load", ()=> {

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);
    let solvableBoard = validBoardGenerator.GenerateValidBoard(6);
    console.log(solvableBoard)


    let gameController = new GameLogic(solvableBoard)

    let board = new BoardView();
    board.renderBoard(solvableBoard);

    var onTileClick = function (index){
      
        console.log(gameController.canMoveTile(index))
        if(gameController.canMoveTile(index))
        {
            board.moveTile(index, gameController.blunkTileIndex, solvableBoard.size)
            gameController.blunkTileIndex = index;
        }
      }

    board.bindOnTileClick(onTileClick, solvableBoard.size);

});



