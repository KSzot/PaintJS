import PubSub from 'pubsub-js';

export class ToolsUI {
  constructor() {
    this.container = document.querySelector(
      '.col-sm-4.col-md-2.col-lg-2.border.border-primary.text-center',
    );
    this.sizeElm = document.querySelector('#paintSize');
    this.sizeDisplay = document.querySelector('.paint-size-val');
    this.subscribers = [];
    this.colorElm = document.querySelector('.paint-color');
    this.createButtons();
    this.resize();
    this.initValue();
    this.changeColor();
  }
  createButton(name) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.setAttribute('type', 'button');
    //btn.setAttribute('data-tool', selector);
    btn.classList.add('btn', 'btn-primary', 'btn-mine');
    btn.addEventListener('click', () => {
      PubSub.publish('nameBtn', { name: name });
      this.subscribers.forEach((el) => {
        el(name);
      });
    });
    return btn;
  }
  createButtons() {
    this.container.appendChild(this.createButton('Pencil'));
    this.container.appendChild(this.createButton('Rubber'));
    this.container.appendChild(this.createButton('Line'));
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  resize() {
    this.sizeElm.addEventListener('change', () => {
      const size = this.sizeElm.value;
      console.log(this.sizeDisplay);
      this.sizeDisplay.textContent = size;
      PubSub.publish('resize', { size: size });
    });
  }
  initValue() {
    this.sizeDisplay.textContent = this.sizeElm.value;
  }
  changeColor() {
    this.colorElm.addEventListener('change', () => {
      const color = this.colorElm.value;
      console.log(color);
      PubSub.publish('changeColor', { color: color });
    });
  }
}
