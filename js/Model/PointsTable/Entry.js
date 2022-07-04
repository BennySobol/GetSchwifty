class Entry
{
    constructor(_boardSize, _startDate, _numOfMoves, _gameType, _playerName)
    {
        this.boardSize = _boardSize;
        this.startDate = _startDate;
        this.numOfMoves = _numOfMoves;
        this.gameType = _gameType;
        this.playerName = _playerName;
        this.points = (_boardSize*_boardSize)/(_numOfMoves + 1);
    }

    toString() 
    {
        return `Moves: ${this.numOfMoves}, Player: ${this.playerName}, Start date: ${this.startDate}, Board size: ${this.boardSize}`;
    }
}