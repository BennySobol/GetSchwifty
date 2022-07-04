class Board
{
    constructor(_size)
    {
        this.size = _size;
        this.values = Array.from(Array(_size*_size).keys());
        this.numOfMoves = 0;
        this.startDate = new Date();
    }

    moveTile(fromIndex, toIndex)
    {
        let temp = this.values[fromIndex];
        this.values[fromIndex] = this.values[toIndex]
        this.values[toIndex] = temp;
        this.numOfMoves++;
    }
}