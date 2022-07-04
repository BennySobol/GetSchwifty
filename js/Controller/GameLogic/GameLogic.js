class GameLogic
{
    constructor(_board)
    {
        this.board = board;
        this.blunkTileIndex = board.values.find(0)
    }

    getPointFromIndex(index, size)
    {
        return {
            x : Number.parseInt(index/size),
            y : (index%size)
       };
    }

    tryMoveTile(index)
    {
        size = this.board.size;
        let indexPoint = getPointFromIndex(index);
        let blunkPoint = getPointFromIndex(this.blunkTileIndex);

        let xDeleta = Math.abs(indexPoint.x - blunkPoint.x);
        let yDeleta =  Math.abs(indexPoint.y - blunkPoint.y)
        return  (xDeleta + yDeleta) == 1;
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