import PubSub from 'pubsub-js';
import { Shape } from './Shape';
export class Circle extends Shape {
  constructor(size, color) {
    super(size);
    this.color = color;
    PubSub.subscribe('changeColor', (tag, data) => {
      this.color = data.color;
    });
  }
  onMouseMove(x, y, ctx, ctx2) {
    if (this.isDrawing) {
      ctx2.clearRect(0, 0, 350, 350);
      ctx2.beginPath();
      ctx2.lineWidth = this.size;
      ctx2.lineJoin = 'round';
      ctx2.lineCap = 'round';
      ctx2.strokeStyle = this.color;
      //ctx2.moveTo(this.startX, this.startY);
      const r = Math.sqrt(
        Math.pow(x - this.startX, 2) + Math.pow(y - this.startY, 2),
      );
      console.log(r);
      ctx2.arc(this.startX, this.startY, r, 0, 2 * Math.PI);
      ctx2.closePath();
      ctx2.stroke();
    }
  }

  onMouseUp(ctx, canvas2, ctx2) {
    if (this.isDrawing) {
      this.isDrawing = false;
      ctx.drawImage(canvas2, 0, 0);
      ctx2.clearRect(0, 0, 350, 350);
    }
  }
  onMouseDown(x, y, ctx, ctx2) {
    if (!this.isDrawing) {
      this.isDrawing = true;
      ctx.beginPath();
      this.startX = x;
      this.startY = y;
      //ctx.moveTo(this.startX, this.startY);
      ctx.lineWidth = this.size;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = this.color;
    }
  }
}
