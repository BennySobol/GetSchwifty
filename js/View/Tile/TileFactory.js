import ImageTile from "./ImageTile.js"  
import TextTile from "./TextTile.js"  


export default class TileFactory
{
    constructor()
    {
        this.TileTypes = {
            Image: 0,
            Text: 1
        }
    }

    getTile(type, index, size)
    {
        if(type == this.TileTypes.Text)
        {
            return new TextTile(index);
        }
        else if(type == this.TileTypes.Image)
        {
            return new ImageTile(index, size);
        }
    }
}
