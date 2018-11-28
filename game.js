function Game()
{

  this.nextID = 0;
  this.exclusiveID = function()
  {
    this.nextID++;
    return this.nextID + "";
  }
  this.start = function()
  {
    this.settings = new RSealSetting();
    this.player = new gameObject();
    game.player.init(
      "player",
      "https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.factzoo.com%2Fsites%2Fall%2Fimg%2Fmammals%2Fseals%2Fribbon-seal-close.jpg&u=https://www.factzoo.com/sites/all/img/mammals/seals/ribbon-seal-close.jpg",
      100, 100,
      100, 100);
      game.player.tag = "player";
  }


  this.update = function()
  {
    window.onkeydown = function (event)
      {
        var code = event.keyCode ? event.keyCode : event.which;
        if (code === 38)
        {
          game.player.move(5,0);
        }
        if (code === 40)
        {
          game.player.move(-5,0);
        }
        if (code === 37)
        {
          var lel = "lel";
          game.killObject(lel);
          console.log(game);

        }
        if (code === 39)
        {
          var i = game.exclusiveID();
          game["lel"] = new gameObject();
           game["lel"].init(
            "lel",
            "https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.factzoo.com%2Fsites%2Fall%2Fimg%2Fmammals%2Fseals%2Fribbon-seal-close.jpg&u=https://www.factzoo.com/sites/all/img/mammals/seals/ribbon-seal-close.jpg",
            400, 400,
            100, 100);
        }
      }
      window.onkeyup = function (event)
      {
        var code = event.keyCode ? event.keyCode : event.which;
        if (code === 32)
        {
        }
      }
  }

  this.killObject = function(name)
  {
    console.log(name)
    delete(game[name]);
    document.getElementById("screen").removeChild(document.getElementById(game[name].id));
  }
}
