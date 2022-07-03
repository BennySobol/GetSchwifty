class Board
{
    constructor(_size)
    {
        this.size = _size;
        this.values = Array.from(Array(_size*_size).keys());
    }
}