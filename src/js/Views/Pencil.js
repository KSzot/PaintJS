import PubSub from 'pubsub-js';
import { Shape } from './Shape';
export class Pencil extends Shape {
  constructor(size, color) {
    super(size);
    this.color = color;
    PubSub.subscribe('changeColor', (tag, data) => {
      this.color = data.color;
    });
  }
}
