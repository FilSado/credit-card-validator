const icons = {
  visa: 'https://cdn.simpleicons.org/visa/1a1f71',
  mastercard: 'https://cdn.simpleicons.org/mastercard/eb001b',
  mir: 'https://cdn.simpleicons.org/mir/0a7f39',
  amex: 'https://cdn.simpleicons.org/americanexpress/0077c8',
  discover: 'https://cdn.simpleicons.org/discover/f76b1c',
  jcb: 'https://cdn.simpleicons.org/jcb/ef3d25',
  diners: 'https://cdn.simpleicons.org/dinersclub/006272',
  unknown: 'https://cdn.simpleicons.org/question/999999', // Добавлена иконка-заглушка для unknown
};

export function createCardIcons() {
  const container = document.createElement('div');
  container.className = 'card-icons';

  Object.entries(icons).forEach(([key, src]) => {
    const img = document.createElement('img');
    img.alt = key.toLowerCase();
    img.className = 'card-icon';

    img.src = src;

    container.appendChild(img);
  });

  return container;
}

export function highlightIcon(container, system) {
  const imgs = container.querySelectorAll('img');
  const systemLower = system.toLowerCase();

  imgs.forEach(img => {
    if (img.alt.toLowerCase() === systemLower) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}
