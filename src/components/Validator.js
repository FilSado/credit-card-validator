// Логика проверки валидности номера карты (алгоритм Луна)
export function isValidCardNumber(cardNumber) {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 12) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

// Определение платёжной системы по номеру карты
export function getPaymentSystem(cardNumber, options = {}) {
  const number = cardNumber.replace(/\D/g, '');

  const patterns = {
    visa: /^4\d{12}(\d{3})?(\d{3})?$/,
    mastercard: /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/,
    amex: /^3[47]\d{13}$/,
    discover: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
    jcb: /^(352[89]\d{12}|35[3-8]\d{13})$/,
    diners: /^3(0[0-5]|[68]\d)\d{11}$/,
    mir: /^220[0-4]\d{12}$/,
  };

  for (const [system, pattern] of Object.entries(patterns)) {
    if (pattern.test(number)) {
      if (system === 'mastercard' && options.ignoreMastercard) {
        return 'unknown'; // игнорируем mastercard, если указано
      }
      return system;
    }
  }

  return 'unknown';
}

