import { faker } from '@faker-js/faker';

function generateCleanFullName() {
  const rawName = faker.person.fullName();
  return rawName.replace(/[^a-zA-Z\s]/g, '');
}

function generateExpiryDate() {
  const month = faker.number.int({ min: 1, max: 12 });
  const year = faker.date.future(5).getFullYear() % 100;
  const mm = month.toString().padStart(2, '0');
  const yy = year.toString().padStart(2, '0');
  return `${mm}/${yy}`;
}

export function paymentData() {
  return {
    cardHolderName: generateCleanFullName(),
    cardNumber: faker.finance.creditCardNumber('################'),
    expiryDate: generateExpiryDate(),
    cvv: faker.finance.creditCardCVV()
  }
};

