export default class TextTile
{
    constructor(_displayValue)
    {
        this.displayValue = _displayValue;
    }

    renderTile()
    {
        const tileElement = document.createElement( 'div' );
        if(this.displayValue == 0)
        {
            return tileElement;
        }
        tileElement.classList.add( 'tile' );
        tileElement.innerHTML = this.displayValue == 0 ? '' : this.displayValue;
         
        return tileElement;
    }
}
