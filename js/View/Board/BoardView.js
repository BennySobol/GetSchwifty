class BoardView
{
    constructor()
    {
        this.boardElement = document.getElementById('board');
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
                
                cellElement.addEventListener('click', () => { board.clickElement(cellBoardIndex); 
                    this.moveTile(cellBoardIndex, cellBoardIndex+1, board.size) });

                cellElement.appendChild(tile.renderTile()); 
            }
        }
    }

    getTableCell(row, col)
    { 
        return this.boardElement.rows[row].cells[col];
    }

    moveTile(from, to, size)
    {
        let fromElement = this.getTableCell(Number.parseInt(from/size), from%size);
        let toElement = this.getTableCell(Number.parseInt(to/size), to%size);
        let temp = fromElement.innerHTML;

        fromElement.innerHTML = toElement.innerHTML;
        toElement.innerHTML = temp;
    }
}