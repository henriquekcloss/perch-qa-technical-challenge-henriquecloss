class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        sortPriceFilter: () => cy.get('[data-testid="sort-price"]'),
        productSearch: () => cy.get('[data-testid="product-search"]'),
        productPrices: () => cy.get('[data-testid^="price-"]'),
        productCards: () => cy.get('.product-card'),
        productNames: () => cy.get('.product-name')
    }

    visit() {
        cy.visit('/');
    }

    priceFilter() {
        this.elements.sortPriceFilter().click();
    }

    typeInSearch(productName) {
        this.elements.productSearch().type(productName);
    }

    clickOnProductByName(productName) {
        this.elements.productNames()
            .contains(productName)       
            .parents('.product-card')      
            .find('.view-details-button')
            .click();
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    verifyProductSearch(productName) {
        this.elements.productCards().should('have.length', 1);
        this.elements.productNames()
            .first()
            .should('have.text', productName);
    }

    verifyProductsOrderAscending() {
        this.elements.productPrices()
            .then($prices => {
                const priceValues = [...$prices].map(el =>
                    parseFloat(el.innerText.replace('$', '').trim())
                );

                const isAscending = arr =>
                    arr.every((v, i, a) => i === 0 || a[i - 1] <= v);

                expect(isAscending(priceValues)).to.be.true;
            });
    }
}

export default new HomePage();