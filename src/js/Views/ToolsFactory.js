import { Pencil } from './Pencil';
import { Rubber } from './Rubber';
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
      case 'Brush':
        return this.pencil;
      case 'Rubber':
        return new Rubber(this.size);
    }
  }
}
