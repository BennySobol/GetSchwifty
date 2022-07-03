class ValidBoardGenerator
{
    constructor(_boardShuffle, _solvableValidator)
    {
        this.boardShuffle = _boardShuffle;
        this.solvableValidator = _solvableValidator;
    }

    GenerateValidBoard(boardSize)
    {
        var board = new Board(boardSize);
        do
        {
            board.values = this.boardShuffle.shuffleBoardValues(board.values);
        } while(!this.solvableValidator.validateBoardSolvable(board));
        return board;
    }
}