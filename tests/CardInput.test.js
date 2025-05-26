/**
 • @jest-environment jest-environment-jsdom
 */

import { createCardInputWidget } from '../src/components/CardInput.js';

describe('CardInput Widget', () => {
  let widget;

  beforeEach(() => {
    document.body.innerHTML = '';
    widget = createCardInputWidget();
    document.body.appendChild(widget);
  });

  test('renders input, button and icons container', () => {
    expect(document.querySelector('.card-input')).not.toBeNull();
    expect(document.querySelector('.validate-button')).not.toBeNull();
    expect(document.querySelector('.card-icons')).not.toBeNull();
  });

  test('shows validation message on button click', () => {
    const input = document.querySelector('.card-input');
    const button = document.querySelector('.validate-button');
    const result = document.querySelector('.validation-result');

    // Ввод валидного номера
    input.value = '4111111111111111';
    button.click();
    expect(result.textContent).toContain('Card number is valid!');

    // Ввод невалидного номера
    input.value = '1234';
    button.click();
    expect(result.textContent).toBe('Invalid card number.');

    // Пустое значение
    input.value = '';
    button.click();
    expect(result.textContent).toBe('Please enter a card number.');
  });

test('highlights correct icon on input', () => {
  const input = document.querySelector('.card-input');
  const iconsContainer = document.querySelector('.card-icons');
  
  input.value = '4111111111111111'; // Visa
  input.dispatchEvent(new Event('input'));

  const imgs = iconsContainer.querySelectorAll('img');
  imgs.forEach(img => {
    if (img.alt.toLowerCase() === 'visa') {
      expect(img.classList.contains('active')).toBe(true);
    } else {
      expect(img.classList.contains('active')).toBe(false);
    }
  });
});

});
