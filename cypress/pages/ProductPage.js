class ProductPage {
    elements = {
        quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
        addToCart: () => cy.get('[data-testid="add-to-cart"]'),
    }

    addProductToCart(){
        this.elements.addToCart().click();
    }

    selectQuantity(quantity) {
        this.elements.quantitySelector().select(quantity);
    }
}

export default new ProductPage();