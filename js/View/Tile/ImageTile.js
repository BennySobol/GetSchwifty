class ImageTile
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
        let imageElement = document.createElement("img");
        imageElement.src=`data/images/${this.displayValue}.jpg`
        tileElement.appendChild(imageElement);
        tileElement.classList.add( 'image-tile' );

        return tileElement;
    }
}
