const menu = {

  score: document.getElementById("score"),

  init: function() {
    menu.createMesage(menu.score);
    menu.restart(menu.score);
  },

  createMesage: function(dom) {
    const newItem = document.createElement("p");
    newItem.classList.add('looseGame')
    newItem.innerHTML = 'GAME OVER';
    dom.appendChild(newItem);
  },

  restart: function(dom) {
    const newItem = document.createElement("button");
    newItem.type = 'button';
    newItem.classList.add('button')
    newItem.innerHTML = 'Rejouer';
    dom.appendChild(newItem);

  }
}