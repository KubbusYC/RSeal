function Game()
{


  this.start = function()
  {
    this.settings = new RSealSetting();
    this.player = new gameObject();
    this.player.new(
      "player",
      "https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.factzoo.com%2Fsites%2Fall%2Fimg%2Fmammals%2Fseals%2Fribbon-seal-close.jpg&u=https://www.factzoo.com/sites/all/img/mammals/seals/ribbon-seal-close.jpg",
      100, 100,
      100, 100);
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
          game.player.move(0,-5);
        }
        if (code === 39)
        {
          game.player.move(0,5);
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
}
