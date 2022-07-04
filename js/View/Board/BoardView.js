class BoardView
{
    constructor()
    {
        this.boardElement = document.getElementById('board');
    }

    bindOnTileClick(callback, size)
    {
        for(let cellIndex=0; cellIndex < size*size; cellIndex++)
        {
            let cell =  this._getTableCell(this._getPointFromIndex(cellIndex, size));
            cell.addEventListener('click', () => { callback(cellIndex)});
        }
    }

    renderBoard(board)
    { 
        for(let rowIndex=0; rowIndex < board.size; rowIndex++)
        {
            let rowElement = this.boardElement.insertRow(rowIndex);
            for(let colIndex=0; colIndex< board.size; colIndex++)  
            {
                let cellElement =  rowElement.insertCell(colIndex);

                let cellBoardIndex = rowIndex*board.size+colIndex;
                let tile = new Tile(board.values[cellBoardIndex]);
            
                cellElement.appendChild(tile.renderTile()); 
            }
        }
    }

    _getPointFromIndex(index, size)
    {
        return {
            x : Number.parseInt(index/size),
            y : (index%size)
       };
    }
    
    _getTableCell(point)
    { 
        return this.boardElement.rows[point.x].cells[point.y];
    }

    moveTile(fromIndex, toIndex, size)
    {
        let fromElement = this._getTableCell(this._getPointFromIndex(fromIndex, size));
        let toElement = this._getTableCell(this._getPointFromIndex(toIndex, size));
        let temp = fromElement.innerHTML;

        fromElement.innerHTML = toElement.innerHTML;
        toElement.innerHTML = temp;
    }
}