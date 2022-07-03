class SolvableValidator
{
    constructor()
    {
      
    }

    countInversions(board)
    {
        let parity = 0;
        let row = 0;
        let blankRow = 0;

        for (let i = 0; i < board.values.length; i++)
        {
            if (i % board.size == 0)
            {
                row++;
            }
            if (board.values[i] == 0)
            {
                blankRow = row;
                continue;
            }
            for (let j = i + 1; j < board.values.length; j++)
            {
                if (board.values[i] > board.values[j] && board.values[j] != 0)
                {
                    parity++;
                }
            }
        }
        return { parity, blankRow };
    }

    validateBoardSolvable(board)
    {
        let {parity, blankRow} = this.countInversions(board);
        console.log(parity, blankRow);
        if (board.size % 2 == 0)
        {
            return (parity + blankRow) % 2 == 0;
        }
        return parity % 2 == 0;
    }
}