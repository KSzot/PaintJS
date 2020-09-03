import PubSub from 'pubsub-js';

export class ToolsUI {
  constructor() {
    this.container = document.querySelector(
      '.col-sm-4.col-md-2.col-lg-2.text-center',
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
  createButton(name, first, second, third, fourth) {
    const btn = document.createElement('button');
    const fontA = document.createElement('i');
    fontA.classList.add(first, second, third, fourth);
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
    btn.insertAdjacentElement('afterbegin', fontA);
    return btn;
  }
  createButtons() {
    this.container.appendChild(
      this.createButton('Pencil', 'fas', 'fa-pen', 'fa-lg', 'mr-2'),
    );
    this.container.appendChild(
      this.createButton('Rubber', 'fas', 'fa-eraser', 'fa-lg', 'mr-2'),
    );
    this.container.appendChild(
      this.createButton(
        'Line',
        'fas',
        'fa-grip-lines-vertical',
        'fa-lg',
        'mr-2',
      ),
    );
    this.container.appendChild(
      this.createButton('Rectangle', 'fas', 'fa-square', 'fa-lg', 'mr-2'),
    );
    this.container.appendChild(
      this.createButton('Circle', 'fas', 'fa-circle', 'fa-lg', 'mr-2'),
    );
    this.container.appendChild(
      this.createButton('Triangle', 'fas', 'fa-caret-up', 'fa-lg', 'mr-2'),
    );
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
