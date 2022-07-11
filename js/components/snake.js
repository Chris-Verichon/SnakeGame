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


  init: function() {
    snake.drawSnake();
    snake.move_snake();
  },

  // Draw one snake part
  drawSnakePart: function(snakePart) {

    // Set the colour of the snake part
    snake.snakeboard_ctx.fillStyle = snake.snake_col;
    // Set the border colour of the snake part
    snake.snakeboard_ctx.strokestyle = snake.snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snake.snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snake.snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  },

  // Draw the snake on the canvas
  drawSnake: function() {
    // Draw each part
    snake.snake.forEach(snake.drawSnakePart)
  },

  move_snake: function() {
    // Create the new Snake's head
    const head = {x: snake.snake[0].x + snake.dx, y: snake.snake[0].y + snake.dy};
    // Add the new head to the beginning of snake body
    snake.snake.unshift(head);
    const has_eaten_food = snake.snake[0].x === aliment.food_x && snake.snake[0].y === aliment.food_y;
      if (has_eaten_food) {
        // Increase score
        snake.score += 10;
        // Display score on screen
        document.getElementById('score').innerHTML = `Score: ${snake.score}`;
        // Generate new food location
        aliment.gen_food();
      } else {
        // Remove the last part of snake body
        snake.snake.pop();
      }
  },
};
