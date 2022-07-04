class PointsTableOutput {
    
    constructor()
    {

    }
    
    renderPointsTable(pointsTableArray)
    {
        const ul = document.createElement('ul');
        document.getElementById('pointsTable').appendChild(ul);
        
        pointsTableArray.forEach(entry => {
            console.log(entry);
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += this._renderEntry(entry);
        });
    }

    _renderEntry(entry) 
    {
        return ` Player: ${entry.playerName}, moves: ${entry.numOfMoves}, dificulty: ${entry.boardSize}`;
    }
}