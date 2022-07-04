class Tile
{
    constructor(_displayValue)
    {
        this.displayValue = _displayValue;
    }

    renderTile()
    {
        const TileElement = document.createElement( 'div' );
        TileElement.classList.add( 'tile' );
        TileElement.innerHTML = this.displayValue == 0 ? '' : this.displayValue;
         
        return TileElement;
    }
}