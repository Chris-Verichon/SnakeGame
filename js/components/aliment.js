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
};