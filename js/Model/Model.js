class Model
{
    constructor(_pointsTable)
    {
        this.pointsTable = _pointsTable;
    }

    addEntry = (boardSize, startDate, numOfMoves, gameType, playerName) => 
    { 
        this.pointsTable.addEntry(boardSize, startDate, numOfMoves, gameType, playerName);
    }
}