export default class PointsTableOutput 
{
    renderPointsTable(pointsTableArray)
    {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = `
        <button id="myBtn">Open Score Board</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="leaderboard-container">
                    <div class="leaderboard">
                        <div class="head">
                            <h1>Score Board</h1>
                        </div>
                        <div id="pointsTable"></div>
                    </div>
                </div>
            </div>
        </div>`

        const ul = document.createElement('ul');
        document.getElementById('pointsTable').appendChild(ul);
        
        pointsTableArray.forEach(entry => {
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += this._renderEntry(entry);
        });


        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    _renderEntry(entry) 
    {
        return ` Player: ${entry.playerName}, moves: ${entry.numOfMoves}, dificulty: ${entry.boardSize}, type: ${entry.gameType ? "Text" : "Image"}, date: ${entry.startDate}`;
    }
}