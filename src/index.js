import './style.css';
import { createCardInputWidget } from './components/CardInput.js';

window.addEventListener('DOMContentLoaded', () => {
  // Лучше искать контейнер с id 'root', если его нет — создать и добавить в body
  let root = document.getElementById('root');

  if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  }

  const widget = createCardInputWidget();
  root.appendChild(widget);
});

