const aliment = {

  food_x: 10,
  food_y: 10,

  // Get the canvas element
  snakeboard: document.getElementById("snakeboard"),
  // Return a two dimensional drawing context
  snakeboard_ctx: snakeboard.getContext("2d"),

  init: function() {
    aliment.drawFood();
  },

  drawFood: function() {
    aliment.snakeboard_ctx.fillStyle = 'lightgreen';
    aliment.snakeboard_ctx.strokestyle = 'darkgreen';
    aliment.snakeboard_ctx.fillRect(aliment.food_x, aliment.food_y, 10, 10);
    aliment.snakeboard_ctx.strokeRect(aliment.food_x, aliment.food_y, 10, 10);
  },

  // Function to create one food element, random position on canvas
  random_food: function(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  },

  // function to generate food on canvas
  gen_food: function() {
    // Generate a random number the food x-coordinate
    aliment.food_x = aliment.random_food(2, aliment.snakeboard.width - 10);
    // Generate a random number for the food y-coordinate
    aliment.food_y = aliment.random_food(2, aliment.snakeboard.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == aliment.food_x && part.y == aliment.food_y;
      if (has_eaten) aliment.gen_food();
    });
  },
};