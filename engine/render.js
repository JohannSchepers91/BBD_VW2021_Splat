import { LEVEL } from "../levels/medlevel.js";

// Helper function
const blockType = (input) =>{
  return input.slice(0,input.indexOf(' '));
};

const canvas = document.getElementById("game-canvas");

const app = new PIXI.Application({ 
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor:  0xFFFFFF,      
  }
);

const gridcontainer = new PIXI.Container();
gridcontainer.x = app.screen.width / 2;
gridcontainer.y = app.screen.height / 2;

const graphics = new PIXI.Graphics();
const width = 20;
const height = 20;

let grid = LEVEL.map;

let innerGridLength = grid[0].length;

for (let i = 0 ; i < grid.length ; i++){
  for( let j = 0 ; j < innerGridLength; j++){

    if(grid[i][j] === "Wall"){

      let posX = (j - innerGridLength / 2) * width
      let posY = (i - innerGridLength / 2) * height 
      // Make a rectangle
      graphics.beginFill(0x000000);
      graphics.drawRect(posX, posY, width, height);
      graphics.endFill();

    }else if ( blockType(grid[i][j]) === "Gate" ){

      let posX = (j - innerGridLength / 2) * width
      let posY = (i - innerGridLength / 2) * height 
      // Make a rectangle
      graphics.beginFill(0xFFFF);
      graphics.drawRect(posX, posY, width, height);
      graphics.endFill();
    }

  }
}

gridcontainer.addChild(graphics);

app.stage.addChild(gridcontainer);
