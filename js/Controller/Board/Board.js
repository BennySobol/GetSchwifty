class Board
{
    constructor(_size)
    {
        this.size = _size;
        this.values = Array.from(Array(_size*_size).keys());
    }

    moveTile(fromIndex, toIndex)
    {
        let temp = this.values[fromIndex];
        this.values[fromIndex] = this.values[toIndex]
        this.values[toIndex] = temp;
    }
}