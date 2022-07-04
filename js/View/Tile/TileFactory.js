class TileFactory
{
    constructor()
    {
        this.TileTypes = {
            Image: 0,
            Numbermatic: 1
        }
    }

    getTile(type, index)
    {
        if(type == this.TileTypes.Numbermatic)
        {
            return new TextTile(index);
        }
        else if(type == this.TileTypes.Image)
        {
            return new ImageTile(index);
        }
    }
}
