import { Shape } from './Shape';

export class Rubber extends Shape {
  constructor(size) {
    super(size);
  }
  onMouseMove(x, y, ctx) {
    if (this.isDrawing) {
      ctx.beginPath();
      ctx.clearRect(x, y, this.size, this.size);
    }
  }
}
