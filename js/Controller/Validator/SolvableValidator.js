class SolvableValidator
{
    constructor()
    {
      
    }

    countInversions(board)
    {
        let inversions = 0;
        let blankRow = 0;

        for (let i = 0; i < board.values.length; i++)
        {
            if (board.values[i] == 0)
            {
                blankRow = Number.parseInt(i / board.size) + 1;
                continue;
            }
            for (let j = i + 1; j < board.values.length; j++)
            {
                if (board.values[i] > board.values[j] && board.values[j] != 0)
                {
                    inversions++;
                }
            }
        }
        return { inversions, blankRow };
    }

    validateBoardSolvable(board)
    {
        let {inversions, blankRow} = this.countInversions(board);
        console.log(inversions, blankRow);
        if (board.size % 2 == 0)
        {
            return (inversions + blankRow) % 2 == 0;
        }
        return inversions % 2 == 0;
    }
}