import { Pencil } from './Pencil';
import { Rubber } from './Rubber';
export class ToolsFactory {
  constructor() {
    this.color = null;
    this.pencil = new Pencil(10, this.color);
    this.rubber = new Rubber(5);
  }

  getTools(tool) {
    //this.getColor();
    switch (tool) {
      case 'Pencil':
        return this.pencil;
      case 'Brush':
        return this.pencil;
      case 'Rubber':
        return this.rubber;
    }
  }
  getColor() {
    this.color = document.querySelector('p').textContent;
  }
}
