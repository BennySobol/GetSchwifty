class Board
{
    constructor(_boardSize)
    {
        this.boardSize = _boardSize;
        this.boardElement = document.getElementById('board');
    }
    renderBoard()
    { 
        for(var rowIndex=0; rowIndex < this.boardSize; rowIndex++)
        {
            var rowElement = this.boardElement.insertRow(rowIndex);
            for(var colIndex=0; colIndex< this.boardSize; colIndex++)  
            {
                var cellElement =  rowElement.insertCell(colIndex);
                var tile = new Tile(rowIndex*this.boardSize+colIndex);
                cellElement.appendChild(tile.renderTile()); 
            }
        }
    }
}