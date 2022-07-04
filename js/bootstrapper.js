class Bootstrapper
{
    bootstrapper()
    {
        // View
        let tileFactory = new TileFactory();
        let boardView = new BoardView(tileFactory);
        let boardSizeInput = new BoardSizeInput();
        let gameTypeInput = new GameTypeInput();
        let gameOverInput = new GameOverInput();
        let pointsTableOutput = new PointsTableOutput();
        let view = new View(boardView, boardSizeInput, gameTypeInput, gameOverInput, pointsTableOutput);

        // Model
        let pointsTable = new PointsTable();
        let model = new Model(pointsTable);

        // Controller

        let boardShuffle = new BoardShuffle();
        let solvableValidator = new SolvableValidator()

        let validBoardGenerator = new ValidBoardGenerator(boardShuffle, solvableValidator);

        let gameController = new GameLogic(validBoardGenerator)

        return new Controller(model, view, gameController)
    }
}



