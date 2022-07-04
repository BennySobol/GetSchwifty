window.addEventListener("load", ()=> {

    // View
    let boardView = new BoardView();
    let boardSizeInput = new BoardSizeInput();
    let view = new View(boardView, boardSizeInput);

    // Controller

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);

    let gameController = new GameLogic(validBoardGenerator)

    _ = new Controller("modle", view, gameController)
});



