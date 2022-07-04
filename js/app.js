window.addEventListener("load", ()=> {

    // View
    let tileFactory = new TileFactory();
    let boardView = new BoardView(tileFactory);
    let boardSizeInput = new BoardSizeInput();
    let gameTypeInput = new GameTypeInput();
    let gameOverOutput = new GameOverOutput();
    let pointsTableOutput = new PointsTableOutput();
    let view = new View(boardView, boardSizeInput, gameTypeInput, gameOverOutput, pointsTableOutput);

    // Model
    let pointsTable = new PointsTable();
    let model = new Model(pointsTable);

    // Controller

    let boardShuffle = new BoardShuffle();
    let solvableValidator = new SolvableValidator()

    let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);

    let gameController = new GameLogic(validBoardGenerator)

    _ = new Controller(model, view, gameController)
});



