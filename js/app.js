window.addEventListener("load", ()=> {

    // View
    let tileFactory = new TileFactory();
    let boardView = new BoardView(tileFactory);
    let boardSizeInput = new BoardSizeInput();
    let gameTypeInput = new GameTypeInput();
    let view = new View(boardView, boardSizeInput, gameTypeInput);

    // Controller

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);

    let gameController = new GameLogic(validBoardGenerator)

    _ = new Controller("modle", view, gameController)
});



