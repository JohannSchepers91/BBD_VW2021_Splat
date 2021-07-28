const canvas = document.getElementById("game-canvas");

const app = new PIXI.Application({ 
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,       
  }
);

const gridcontainer = new PIXI.Container();
gridcontainer.x = app.screen.width / 2;
gridcontainer.y = app.screen.height / 2;

const graphics = new PIXI.Graphics();
const width = 20;
const height = 20;

let grid = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
  [1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

let innerGridLength = grid[0].length;

for (let i = 0 ; i < grid.length ; i++){
  for( let j = 0 ; j < innerGridLength; j++){

    if(grid[i][j]){

      let posX = (i - innerGridLength / 2) * width
      let posY = (j - innerGridLength / 2) * height 
      // Make a rectangle
      graphics.beginFill(0xDE3249);
      graphics.drawRect(posX, posY, width, height);
      graphics.endFill();

    }

  }
}

gridcontainer.addChild(graphics);

app.stage.addChild(gridcontainer);
