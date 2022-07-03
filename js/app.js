class Tile
{
    constructor(_displayValue)
    {
        this.displayValue = _displayValue;
    }

    renderTile(index) {
        const TileElement = document.createElement( 'div' );
        TileElement.classList.add( 'tile' );
        TileElement.innerHTML = this.displayValue;
         
        return TileElement;
    }
}


class Board
{
    constructor(_boardSize)
    {
        this.boardSize = _boardSize;
        this.boardElement = document.getElementById('board');
    }
    renderBoard()
    { 
        for(var rowIndex=0; rowIndex< this.boardSize; rowIndex++)
        {
            var rowElement = this.boardElement.insertRow(rowIndex);
            for(var colIndex=0; colIndex< this.boardSize; colIndex++)  
            {
                var cellElement =  rowElement.insertCell(colIndex);
                cellElement.innerHTML="Row-"+rowIndex+" Column-"+colIndex; 
            }
        }
    }

}

window.addEventListener("load", ()=> {

   let board = new Board(3);
   board.renderBoard();
}
);