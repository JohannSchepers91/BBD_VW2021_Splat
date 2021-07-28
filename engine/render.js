import { LEVEL } from "../levels/medlevel.js";

// Window dimensions
let _w = window.innerWidth;
let _h = window.innerHeight;

const canvas = document.getElementById("game-canvas");

const renderer = new PIXI.Renderer({ 
	view:canvas,
	width: _w,
	height: _h,
	backgroundColor:  0xFFFFFF,
	resolution: window.devicePixelRatio,
	autoDensity: true      
});

// Responsive window
window.addEventListener('resize',resize);
function resize(){
	_w = window.innerWidth;
	_h = window.innerHeight; 

	renderer.resize(_w,_h);
}

const stage = new PIXI.Container();
const mazeContainer = new PIXI.Container();

mazeContainer.x = renderer.screen.width / 2;
mazeContainer.y = renderer.screen.height / 2;

const graphics = new PIXI.Graphics();
const tileW = 20;
const tileH = 20;

let grid = LEVEL.map;

let innerGridLength = grid[0].length;

for (let i = 0 ; i < grid.length ; i++){
  for( let j = 0 ; j < innerGridLength; j++){

    if(grid[i][j] === "Wall"){

      let posX = (j - innerGridLength / 2) * tileW;
      let posY = (i - innerGridLength / 2) * tileH; 
      // Make a rectangle
      graphics.beginFill(0x000000);
      graphics.drawRect(posX, posY, tileW, tileH);
      graphics.endFill();

    }else if ( blockType(grid[i][j]) === "Gate" ){

      let posX = (j - innerGridLength / 2) * tileW
      let posY = (i - innerGridLength / 2) * tileH 
      // Make a rectangle
      graphics.beginFill(0xFFFF);
      graphics.drawRect(posX, posY, tileW, tileH);
      graphics.endFill();
    }

  }
}

mazeContainer.addChild(graphics);
stage.addChild(mazeContainer);

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start()
function animate(){
	mazeContainer.x = renderer.screen.width / 2;
	mazeContainer.y = renderer.screen.height / 2;

	renderer.render(stage);
}

// Helper function
function blockType(input){
	return input.slice(0,input.indexOf(' '));
};