class SuccessPage {
    elements = {
        successContent: () => cy.get('.success-content'),
        successIcon: () => cy.get('.success-icon'),
        orderInfo: () => cy.get('[data-testid="order-info"]'),
        viewOrders: () => cy.get('[data-testid="view-orders"]'),
        continueShopping: () => cy.get('[data-testid="continue-shopping"]')
    }

    verifySuccessContent(){
        const successMessage = "We've received your order and will begin processing it right away. You'll receive a confirmation email shortly."

        this.elements.successContent().should('be.visible');
        this.elements.successIcon().should('be.visible');
        this.elements.orderInfo().should('be.visible');
        this.elements.orderInfo().should('contain.text', successMessage);
        this.elements.viewOrders().should('be.visible');
        this.elements.continueShopping().should('be.visible');
    }

    viewYourOrders() {
        this.elements.viewOrders().click();
    }
}

export default new SuccessPage();