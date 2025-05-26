import { isValidCardNumber, getPaymentSystem } from './Validator.js';
import { createCardIcons, highlightIcon } from './CardIcons.js';

export function createCardInputWidget() {
  const container = document.createElement('div');
  container.className = 'card-validator-widget';

  const iconsContainer = createCardIcons();
  container.appendChild(iconsContainer);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter card number';
  input.className = 'card-input';
  container.appendChild(input);

  const button = document.createElement('button');
  button.textContent = 'Click to Validate';
  button.className = 'validate-button';
  container.appendChild(button);

  const result = document.createElement('div');
  result.className = 'validation-result';
  container.appendChild(result);

  input.addEventListener('input', () => {
    const system = getPaymentSystem(input.value);
    highlightIcon(iconsContainer, system);
    result.textContent = '';
  });

  button.addEventListener('click', () => {
    const val = input.value.trim();

    if (!val) {
      result.textContent = 'Please enter a card number.';
      result.style.color = 'red';
      highlightIcon(iconsContainer, 'unknown');
      return;
    }

    const valid = isValidCardNumber(val);
    if (!valid) {
      result.textContent = 'Invalid card number.';
      result.style.color = 'red';
      highlightIcon(iconsContainer, 'unknown');
      return;
    }

    const system = getPaymentSystem(val);
    if (system === 'unknown') {
      result.textContent = 'Invalid card number.';
      result.style.color = 'red';
      highlightIcon(iconsContainer, 'unknown');
      return;
    }

    result.textContent = `Card number is valid! Payment system: ${system.toUpperCase()}`;
    result.style.color = 'green';
    highlightIcon(iconsContainer, system);
  });

  return container;
}
