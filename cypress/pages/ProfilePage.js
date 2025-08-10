class ProfilePage {
    elements = {
        profilePage: () => cy.get('[data-testid="profile-page"]'),
        profileContent: () => cy.get('.profile-content'),
        profileName: () => cy.get('[data-testid="profile-name"]'),
        profileEmail: () => cy.get('[data-testid="profile-email"]'),
        editProfile: () => cy.get('[data-testid="edit-profile"]'),
        editProfileName: () => cy.get('[data-testid="profile-name-input"]'),
        editProfileEmail: () => cy.get('[data-testid="profile-email-input"]'),
        saveProfile: () => cy.get('[data-testid="save-profile"]'),
        ordersCard: () => cy.get('.orders-card'),
        ordersList: () => cy.get('[data-testid="orders-list"]')
    }

    visit() {
        cy.visit('/profile');
    }

    updateProfileInfo(name, email) {
        this.elements.editProfile().click();
        this.elements.editProfileName().clear().type(name);
        this.elements.editProfileEmail().clear().type(email);
        this.elements.saveProfile().click();
    }

    verifyProfileInformation(name, email){
        this.elements.profileName().should('have.text', name)
        this.elements.profileEmail().should('have.text', email)
    }

    verifyProfilePage() {
        this.elements.profilePage().should('be.visible');
        this.elements.profileContent().should('be.visible');
    }

    verifyOrderHistory(){
        this.elements.ordersCard().should('be.visible');
    }

    verifyOrderHistoryAfterPurchase(){
        this.elements.ordersCard().should('be.visible');
        this.elements.ordersList().should('have.length', 1);
    }
}

export default new ProfilePage();