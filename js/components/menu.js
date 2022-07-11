const menu = {

  score: document.getElementById("score"),
  button: document.getElementsByClassName('button'),

  init: function() {
    menu.createMesage(menu.score);
    menu.restart(menu.score);
    menu.listener(menu.button);
  },

  listener: function(item) {
    // console.log(item[0]);
    item[0].addEventListener("click", menu.handleClickButton);
  },

  handleClickButton: function() {
    console.log('click');
    location.reload();
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
    newItem.innerHTML = 'Start';
    dom.appendChild(newItem);

  },


}