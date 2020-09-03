import { Pencil } from './Pencil';
import { Rubber } from './Rubber';
import { Line } from './Line';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import PubSub from 'pubsub-js';
export class ToolsFactory {
  constructor() {
    PubSub.subscribe('resize', (tag, data) => {
      this.size = data.size;
    });
    PubSub.subscribe('changeColor', (tag, data) => {
      this.color = data.color;
    });
  }

  getTools(name) {
    switch (name) {
      case 'Pencil':
        return new Pencil(this.size, this.color);
      case 'Line':
        return new Line(this.size, this.color);
      case 'Rubber':
        return new Rubber(this.size);
      case 'Rectangle':
        return new Rectangle(this.size, this.color);
      case 'Circle':
        return new Circle(this.size, this.color);
    }
  }
}
