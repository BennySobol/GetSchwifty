import Entry from "./Entry.js"

export default class PointsTable
{
    constructor()
    {
        this.pointsArray = JSON.parse(localStorage.getItem('pointsArray')) || []
    }

    addEntry(boardSize, startDate, numOfMoves, gameType, playerName)
    {
        let newEntry = new Entry(boardSize, startDate, numOfMoves, gameType, playerName);
        this.pointsArray.push(newEntry);

        this.pointsArray.sort(function(a, b) {
            return b.points - a.points;
        });
        this.pointsArray = this.pointsArray.slice(0, 5);

        localStorage.setItem('pointsArray', JSON.stringify(this.pointsArray))
    }
}