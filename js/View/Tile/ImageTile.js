var IMAGE_SIZE = 720;


export default class ImageTile
{
    constructor(_displayValue, _size)
    {
        this.size = _size;
        this.displayValue = _displayValue;
    }

    
    _getPointFromIndex(index, size)
    {
        return {
            y : Number.parseInt(index/size),
            x : (index%size)
       };
    }
    

    renderTile()
    {
        this.displayValue -= 1;
        let partSize = IMAGE_SIZE/this.size;
        let point = this._getPointFromIndex(this.displayValue, this.size);

        const tileElement = document.createElement( 'div' );
        tileElement.style = `padding:1px; width: ${partSize}px; height: ${partSize}px;overflow:hidden;position:relative;`; 
       
    
        if(this.displayValue == -1)
        {
            return tileElement;
        }
        let imageElement = document.createElement("img");
        imageElement.src=`data/image.jpeg`
        imageElement.style = `position:absolute;top:-${point.y*partSize}px;left:-${point.x*partSize}px;`
        tileElement.appendChild(imageElement);

        return tileElement;
    }
}
