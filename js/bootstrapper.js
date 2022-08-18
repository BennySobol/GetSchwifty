import BoardView from "./View/Board/BoardView.js"
import TileFactory from "./View/Tile/TileFactory.js"
import BoardSizeInput from "./View/Inupt/BoardSizeInput.js"  
import GameTypeInput from "./View/Inupt/GameTypeInput.js"  
import GameOverInput from "./View/Inupt/GameOverInput.js"
import PointsTableOutput from "./View/Output/PointsTableOutput.js"
import View from "./View/View.js" 
import PointsTable from "./Model/PointsTable/PointsTable.js" 
import Model from "./Model/Model.js"
import GameLogic from "./Controller/GameLogic/GameLogic.js" 
import BoardShuffle from "./Controller/Shuffle/BoardShuffle.js" 
import SolvableValidator from "./Controller/Validator/SolvableValidator.js" 
import ValidBoardGenerator from "./Controller/ValidBoardGenerator/ValidBoardGenerator.js" 
import Controller from "./Controller/Controller.js"

export default class Bootstrapper
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



