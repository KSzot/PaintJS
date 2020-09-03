import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { ToolsUI } from './Views/ToolsUI';
import { ToolsFactory } from './Views/ToolsFactory';
import { BoardDrawingUI } from './Views/BoardDrawingUI';
import '../css/main.scss';
document.addEventListener('DOMContentLoaded', () => {
  const tools = new ToolsUI();
  const factory = new ToolsFactory();
  const board = new BoardDrawingUI('.col-sm-8.col-md-10.col-lg-7', 350, 350);

  tools.subscribe((selectedTool) => {
    const tool = factory.getTools(selectedTool);
    console.log(tool);
    board.changeTools(tool);
  });
});
