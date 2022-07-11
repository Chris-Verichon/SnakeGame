const menu = {

  root: document.getElementById("root"),
  container: document.getElementsByClassName('popUp'),
  button: document.getElementsByClassName('button'),

  init: function() {
    menu.createContainer(menu.root);
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

  createContainer: function(dom) {
    const newItem = document.createElement("div");
    newItem.classList.add('popUp');
    dom.appendChild(newItem);

    menu.createMesage(newItem);
    menu.restart(newItem);
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
    newItem.innerHTML = 'start';
    dom.appendChild(newItem);

  },


}