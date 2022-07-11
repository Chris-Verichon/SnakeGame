// console.log("board script");

// Manage the board
const board = {

  board_border: 'black',
  board_background: "white",

  // Get the canvas element
  snakeboard: document.getElementById("snakeboard"),
  // Return a two dimensional drawing context
  snakeboard_ctx: snakeboard.getContext("2d"),
  
  init: function() {

    board.clearCanvas()
    
  },

  // draw a border around the canvas
  clearCanvas: function() {
    //  Select the colour to fill the drawing
    board.snakeboard_ctx.fillStyle = board.board_background;
    //  Select the colour for the border of the canvas
    board.snakeboard_ctx.strokestyle = board.board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    board.snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    board.snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
  },
};

