console.log('snake script')
const snake = {

  snake_col: 'lightblue',
  snake_border: 'darkblue',
  snake: [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ],

  // Get the canvas element
  snakeboard: document.getElementById("snakeboard"),
  // Return a two dimensional drawing context
  snakeboard_ctx: snakeboard.getContext("2d"),

  // Horizontal velocity
  dx: 10,
  // Vertical velocity
  dy: 0,

  // True if changing direction
  changing_direction: false,

  score: 0,


