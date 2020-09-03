export class BoardDrawingUI {
  constructor(container, width, height) {
    this.attachCanvas(container, this.createCanvas(width, height));
    this.currentTool = null;
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.classList.add('canvas', 'position-absolute');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const canvas2 = document.createElement('canvas');
    canvas2.classList.add('canvas', 'position-absolute');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = width;
    canvas2.height = height;

    canvas.addEventListener('mousedown', (event) => {
      if (this.currentTool)
        this.currentTool.onMouseDown(event.offsetX, event.offsetY, ctx, ctx2);
    });

    canvas.addEventListener('mousemove', (event) => {
      if (this.currentTool)
        this.currentTool.onMouseMove(event.offsetX, event.offsetY, ctx, ctx2);
    });

    canvas.addEventListener('mouseup', (event) => {
      if (this.currentTool) this.currentTool.onMouseUp(ctx, canvas2, ctx2);
    });
    return [canvas, canvas2];
  }
  attachCanvas(container, canvas) {
    document.querySelector(container).appendChild(canvas[1]);
    document.querySelector(container).appendChild(canvas[0]);
  }

  changeTools(tool) {
    this.currentTool = tool;
  }
}
