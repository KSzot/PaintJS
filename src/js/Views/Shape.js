export class Shape {
  constructor(size, color) {
    this.size = size || 16;
    this.color = color || 'red';
    this.isDrawing = false;
  }

  onMouseMove(x, y, ctx) {
    if (this.isDrawing) {
      ctx.beginPath();
      ctx.lineWidth = this.size;
      ctx.lineCap = 'round';
      ctx.strokeStyle = this.color;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  onMouseUp(ctx) {
    if (this.isDrawing) {
      this.isDrawing = false;
    }
  }
  onMouseDown() {
    if (!this.isDrawing) {
      this.isDrawing = true;
    }
  }
}
