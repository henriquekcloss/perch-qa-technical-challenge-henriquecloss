class AddressPage {
    elements = {
        firstName: () => cy.get('[data-testid="firstname-input"]'),
        email: () => cy.get('[data-testid="email-input"]'),
        phone: () => cy.get('[data-testid="phone-input"]'),
        streetAddress: () => cy.get('[data-testid="street-input"]'),
        city: () => cy.get('[data-testid="city-input"]'),
        state: () => cy.get('[data-testid="state-input"]'),
        zipCode: () => cy.get('[data-testid="zipcode-input"]'),
        country: () => cy.get('[data-testid="country-input"]'),
        payment: () => cy.get('[data-testid="continue-to-payment"]')
    }

    fillDeliveryForm(shippingAddress) {
        this.elements.firstName().type(shippingAddress.firstName);
        this.elements.email().type(shippingAddress.email);
        this.elements.phone().type(shippingAddress.phone);
        this.elements.streetAddress().type(shippingAddress.streetAddress);
        this.elements.city().type(shippingAddress.city);
        this.elements.state().type(shippingAddress.state);
        this.elements.zipCode().type(shippingAddress.zipCode);
        this.elements.country().type(shippingAddress.country);
    }

    continueToPayment(){
        this.elements.payment().click();
    }
}

export default new AddressPage();