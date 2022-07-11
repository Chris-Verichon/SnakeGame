// console.log('app load');

const app = {

  init: function() {
    if(snake.has_game_ended()) return;

    snake.changing_direction = false;
    setTimeout(function onTick() {
      board.init();
      snake.init();
      aliment.init();
      app.init();
    }, 100)

  },
};

document.addEventListener('DOMContentLoaded', app.init);
