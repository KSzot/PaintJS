export class BoardDrawingUI {
  constructor(container, width, height) {
    this.attachCanvas(container, this.createCanvas(width, height));
    this.currentTool = null;
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.classList.add('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    canvas.addEventListener('mousedown', (event) => {
      this.currentTool.onMouseDown();
    });

    canvas.addEventListener('mousemove', (event) => {
      this.currentTool.onMouseMove(event.offsetX, event.offsetY, ctx);
    });

    canvas.addEventListener('mouseup', (event) => {
      this.currentTool.onMouseUp(ctx);
    });
    return canvas;
  }
  attachCanvas(container, canvas) {
    console.log(container);
    document.querySelector(container).appendChild(canvas);
  }

  changeTools(tool) {
    this.currentTool = tool;
  }
}
