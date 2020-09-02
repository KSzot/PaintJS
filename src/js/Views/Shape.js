import PubSub from 'pubsub-js';
export class Shape {
  constructor(size) {
    this.size = size || 5;
    this.isDrawing = false;
    PubSub.subscribe('resize', (tag, data) => {
      this.size = data.size;
    });
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
