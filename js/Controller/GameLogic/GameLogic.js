class GameLogic
{
    constructor(_board)
    {
        this.board = _board;
        this.blunkTileIndex = this.board.values.findIndex((x) => !x);
    }

    _getPointFromIndex(index, size)
    {
        return {
            x : Number.parseInt(index/size),
            y : (index%size)
       };
    }

    canMoveTile(index)
    {
        let indexPoint = this._getPointFromIndex(index, this.board.size);
        let blunkPoint = this._getPointFromIndex(this.blunkTileIndex, this.board.size);

        let xDeleta = Math.abs(indexPoint.x - blunkPoint.x);
        let yDeleta =  Math.abs(indexPoint.y - blunkPoint.y);
        return (xDeleta + yDeleta) == 1;
    }

    isGameOver()
    {
        for (let i = 0; i < this.board.values.length - 1; i++)
        {
            if (this.board.values[i] > this.board.values[i+1])
            {
                return false;
            }
        }
        return true;
    }
}