// GameObjects
//Constructor for the gameObject
function gameObject() {
    this.id;
    this.src;
    this.posY;
    this.posX;
    this.height;
    this.width;

    //sets up a newly created function with values and sprite
    this.new = function(id, src, posY, posX, height, width)
    {
      //assign values to gameObject
      this.id = id;
      this.src = src;
      this.posY = posY;
      this.posX = posX;
      this.height = height;
      this.width = width;
      //set up sprite
      var gob = document.createElement("gob");
      gob.src = src;
      gob.alt = "LOADING";
      gob.id = id;
      gob.style.position = "absolute";
      gob.style.left = posX + "px";
      gob.style.top = (parseInt(document.getElementById("screen").style.height.replace("px",""))-posY)+"px";
      gob.style.height = height +"px";
      gob.style.width = width + "px";
      //display sprite
      document.getElementById("screen").appendChild(img);
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
      gob.style.top = (parseInt(document.getElementById("screen").style.height.replace("px",""))-this.posY)+"px";
    }

    //set a gameObject to new properties
    this.set = function(src, posY, posX)
    {
      var gob = document.getElementById(this.id);
      if(src != ("same" || ""))
      {
        this.src = src;
        gob.src = src;
      }
      if(posX != ("same" || ""))
      {
        this.posX = posX
        gob.style.left = this.posX + "px";
      }
      if(posY != ("same" || ""))
      {
        this.posY = posY;
        gob.style.top = (parseInt(document.getElementById("screen").style.height.replace("px",""))-this.posY)+"px";
      }
    }


}
