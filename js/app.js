window.addEventListener("load", ()=> {

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);
    let solvableBoard = validBoardGenerator.GenerateValidBoard(3);
    console.log(solvableBoard)

    let board = new BoardView();
    board.renderBoard(solvableBoard);

});