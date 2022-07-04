class Model
{
    constructor(_pointsTable)
    {
        this.pointsTable = _pointsTable;
    }

    addEntry = (boardSize, startDate, numOfMoves, gameType) => 
    { 
        this.pointsTable.addEntry(boardSize, startDate, numOfMoves, gameType);
    }
}