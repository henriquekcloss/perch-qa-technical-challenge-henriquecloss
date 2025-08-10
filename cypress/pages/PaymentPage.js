class PaymentPage {
    elements = {
        cardHolderName: () => cy.get('[data-testid="cardholder-input"]'),
        cardNumber: () => cy.get('[data-testid="card-number-input"]'),
        expiryDate: () => cy.get('[data-testid="expiry-input"]'),
        cvv: () => cy.get('[data-testid="cvv-input"]'),
        placeOrder: () => cy.get('[data-testid="complete-payment"]')
    }

    fillPaymentInformation(paymentData){
        this.elements.cardHolderName().type(paymentData.cardHolderName);
        this.elements.cardNumber().type(paymentData.cardNumber);
        this.elements.expiryDate().type(paymentData.expiryDate);
        this.elements.cvv().type(paymentData.cvv);
    }

    placeOrderClick() {
        this.elements.placeOrder().click();
    }
}

export default new PaymentPage();