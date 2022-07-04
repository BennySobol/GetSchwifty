class BoardView
{
    constructor()
    {
        this.boardElement = document.getElementById('board');
    }

    bindOnTileClick(callback, size)
    {
        let cellBoardIndex = 0;
        for(let rowIndex=0; rowIndex < size; rowIndex++)
        {
            for(let colIndex=0; colIndex< size; colIndex++)
            {
                let index = cellBoardIndex++;
                let cell = this._getTableCell(rowIndex, colIndex);
                cell.addEventListener('click', () => { callback(index)});; 
            }
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
                
                //cellElement.addEventListener('click', () => { this.onTileClick(cellBoardIndex); 
                ///*this.moveTile(cellBoardIndex, cellBoardIndex+1, board.size)*/ });

                cellElement.appendChild(tile.renderTile()); 
            }
        }
    }

    _getTableCell(row, col)
    { 
        return this.boardElement.rows[row].cells[col];
    }

    moveTile(fromIndex, toIndex, size)
    {
        let fromElement = this._getTableCell(Number.parseInt(fromIndex/size), fromIndex%size);
        let toElement = this._getTableCell(Number.parseInt(toIndex/size), toIndex%size);
        let temp = fromElement.innerHTML;

        fromElement.innerHTML = toElement.innerHTML;
        toElement.innerHTML = temp;
    }
}