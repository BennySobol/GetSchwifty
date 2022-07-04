window.addEventListener("load", ()=> {

    // View
    let boardView = new BoardView();
    let view = new View(boardView);

    // Controller

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);
    let solvableBoard = validBoardGenerator.GenerateValidBoard(2);

    let gameController = new GameLogic(solvableBoard)

    let controller = new Controller("modle", view, gameController)
});



