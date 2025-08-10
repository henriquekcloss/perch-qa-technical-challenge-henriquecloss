import { faker } from '@faker-js/faker';

function generateCleanCountryName() {
  const rawCountryName = faker.location.country();
  return rawCountryName.replace(/[^a-zA-Z\s]/g, '');
}

export function shippingAddress() {
  return {
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.imei('############'),
    streetAddress: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode('#####'),
    country: generateCleanCountryName()
  }
};

