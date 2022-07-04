class PointsTableOutput {
    
    constructor()
    {

    }
    
    renderPointsTable(pointsTableArray)
    {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = `
        <div class="leaderboard-container">
            <div class="leaderboard">
                <div class="head">
                    <h1>Score Board</h1>
                </div>
                <div id="pointsTable"></div>
            </div>
        </div>`
        const ul = document.createElement('ul');
        document.getElementById('pointsTable').appendChild(ul);
        
        pointsTableArray.forEach(entry => {
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