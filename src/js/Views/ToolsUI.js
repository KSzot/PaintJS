export class ToolsUI {
  constructor() {
    this.container = document.querySelector(
      '.col-sm-4.col-md-2.col-lg-2.border.border-primary.text-center',
    );
    this.subscribers = [];
    this.createButtons();
    this.changeSize(6);
  }
  createButton(name) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.setAttribute('type', 'button');
    //btn.setAttribute('data-tool', selector);
    btn.classList.add('btn', 'btn-primary', 'btn-mine');
    btn.addEventListener('click', () => {
      this.subscribers.forEach((element) => {
        console.log(element);
        element(name);
      });
    });
    return btn;
  }
  createButtons() {
    this.container.appendChild(this.createButton('Pencil'));
    this.container.appendChild(this.createButton('Rubber'));
  }
  changeSize(name) {
    document.querySelectorAll('.dropdown-item').forEach((element) => {
      element.addEventListener('click', () => {
        this.subscribers.forEach((value) => {
          console.log(value);
          value(name);
        });
      });
    });
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
