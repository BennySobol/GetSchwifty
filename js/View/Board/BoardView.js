class BoardView
{
    constructor()
    {
        this.boardElement = document.getElementById('board');
    }
    renderBoard(board)
    { 
        for(var rowIndex=0; rowIndex < board.size; rowIndex++)
        {
            var rowElement = this.boardElement.insertRow(rowIndex);
            for(var colIndex=0; colIndex< board.size; colIndex++)  
            {
                var cellElement =  rowElement.insertCell(colIndex);
                var tile = new Tile(board.values[rowIndex*board.size+colIndex]);
                cellElement.appendChild(tile.renderTile()); 
            }
        }
    }
}