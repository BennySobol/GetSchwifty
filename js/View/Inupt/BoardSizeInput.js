class BoardSizeInput 
{
    getBoardSize() 
    {
        var min = 2;
        var max = 10;
        var size = parseInt(prompt(`Enter board size (${min} - ${max})`, '3'));
        while (!size || size < min || size > max)
        {
            size = parseInt(prompt(`${size} is not a valid size\nEnter board size (${min} - ${max})`, '3'));
        }
        return size;
    }
}