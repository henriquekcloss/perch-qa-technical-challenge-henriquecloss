class CartPage {
    elements = {
        quantitySelector: () => cy.get('[data-testid="quantity-3"]'),
        itemPrice: () => cy.get('[data-testid="item-price-3"]'),
        subtotal: () => cy.get('[data-testid="subtotal"]'),
        checkOut: () => cy.get('[data-testid="proceed-to-checkout"]')
    }

    proceedToCheckOut() {
        this.elements.checkOut().click();
    }

    verifyQuantitySelected(quantity) {
        this.elements.quantitySelector().should('have.value', quantity);
    }

    verifySubtotal(quantity) {
        this.elements.itemPrice()
            .invoke('text')
            .then(priceText => {
                const unitPrice = parseFloat(priceText.replace('$', '').trim());
                const expectedTotal = (unitPrice * parseInt(quantity)).toFixed(2);

                this.elements.subtotal()
                    .invoke('text')
                    .then(subtotalText => {
                        const subtotal = subtotalText.replace('$', '').trim();
                        expect(subtotal).to.equal(expectedTotal);
                    });
            });
    }
}

export default new CartPage();





