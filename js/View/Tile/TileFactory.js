class TileFactory
{
    constructor()
    {
        this.TileTypes = {
            Image: 0,
            Text: 1
        }
    }

    getTile(type, index)
    {
        if(type == this.TileTypes.Text)
        {
            return new TextTile(index);
        }
        else if(type == this.TileTypes.Image)
        {
            return new ImageTile(index);
        }
    }
}
