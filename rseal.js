//Game settings
function RsSetting()
{
  this.fps = 30;
}
//GameObjects
//Constructor for the gameObject
function gameObject()
{
    this.id;
    this.src;
    this.posY;
    this.posX;
    this.height;
    this.width;
    this.tag = "default";

    //sets up a newly created function with values and sprite
    this.init = function(id, src, posY, posX, height, width)
    {
      //assign values to gameObject
      this.id = id;
      this.src = src;
      this.posY = posY;
      this.posX = posX;
      this.height = height;
      this.width = width;
      //set up sprite
      var gob = document.createElement("img");
      gob.src = src;
      gob.alt = "LOADING";
      gob.id = id;
      gob.style.position = "absolute";
      gob.style.left = posX + "px";
      gob.style.top = game.toolKit.y(this.posY);
      gob.style.height = height +"px";
      gob.style.width = width + "px";
      //display sprite
      document.getElementById("screen").appendChild(gob);
    }

    //moves a game object by dY and dX
    this.move = function(dY, dX)
    {
      //update gameObject
      this.posY = this.posY + dY;
      this.posX = this.posX + dX;
      //update sprite
      var gob = document.getElementById(this.id);
      gob.style.left = this.posX + "px";
      gob.style.top = game.toolKit.y(this.posY);
    }

    //set a gameObject to new properties
    this.set = function(posY, posX)
    {
      var gob = document.getElementById(this.id);
        this.posX = posX
        gob.style.left = this.posX + "px";
        this.posY = posY;
        gob.style.top = game.toolKit.y(this.posY);
    }

    //Update any changes in the gameObject to the on screen sprite
    this.update = function()
    {
      var gob = document.getElementById(this.id);
      gob.src = this.src;
      gob.style.left = this.posX + "px";
      gob.style.top = game.toolKit.y(this.posY);
      gob.style.height = this.height +"px";
      gob.style.width = this.width + "px";
    }

    //Deletion of gameObjects
    this.kill = function(name)
    {
      document.getElementById("screen").removeChild(document.getElementById(game[name].id));
      for (var k in game)
      {
        if(~k.indexOf(name)) // If the current key contains the string we're looking for
        {
          delete game[k];
        }
      }
      console.log(game);
    }

}

//Coliders
function Collider(top, bottom, left, right, plane)
{
  this.top = top;
  this.bottom = bottom;
  this.left = left;
  this.right = right;
  this.plane = plane;
}

//Various utilities
function RsUtilities()
{
  this.nextID = 0;
  this.exclusiveID = function()
  {
    this.nextID++;
    return this.nextID + "";
  }

  this.px = function(value)
  {
    return parseInt(value.replace("px",""))
  }
  this.y = function(posY)
  {
    return (parseInt(document.getElementById("screen").style.height.replace("px",""))-posY)+"px"
  }
  this.getById = function(id)
  {
    for (var property in game) {
      if (game.hasOwnProperty(property)) {
        if (game[property].hasOwnProperty("id"))
        {
          if (game[property].id == id)
          {
            return game[property];        }
        }
      }
    }
  }
}
