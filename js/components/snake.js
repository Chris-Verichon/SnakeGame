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

  // Function to change direction whith arrow on keydown
  change_direction: function(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
  // Prevent the snake from reversing
  
    if (snake.changing_direction) return;
    snake.changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = snake.dy === -10;
    const goingDown = snake.dy === 10;
    const goingRight = snake.dx === 10;
    const goingLeft = snake.dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
      snake.dx = -10;
      snake.dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
      snake.dx = 0;
      snake.dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
      snake.dx = 10;
      snake.dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      snake.dx = 0;
      snake.dy = 10;
    }
  },

  // Function limit game and define the limit to game over
  has_game_ended: function() {
    for (let i = 4; i < snake.snake.length; i++) {
      if (snake.snake[i].x === snake.snake[0].x && snake.snake[i].y === snake.snake[0].y) return true
    }
    const hitLeftWall = snake.snake[0].x < 0;
    const hitRightWall = snake.snake[0].x > snake.snakeboard.width - 10;
    const hitToptWall = snake.snake[0].y < 0;
    const hitBottomWall = snake.snake[0].y > snake.snakeboard.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
  },
};

document.addEventListener("keydown", snake.change_direction);