class PointsTable
{
    constructor()
    {
        this.pointsArray = JSON.parse(localStorage.getItem('pointsArray')) || []
    }

    addEntry(boardSize, startDate, numOfMoves, gameType, playerName = "Anonymous")
    {
        let newEntry = new Entry(boardSize, startDate, numOfMoves, gameType, playerName);
        this.pointsArray.push(newEntry);

        this.pointsArray.sort(function(a, b) {
            return a.points - b.points;
        });
        this.pointsArray = this.pointsArray.slice(0, 5);

        localStorage.setItem('pointsArray', JSON.stringify(this.pointsArray))
    }
}