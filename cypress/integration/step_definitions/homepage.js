import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

When('I sort products by price in ascending order', () => {
    HomePage.priceFilter();
});

Then('the products should be displayed from lowest to highest price', () => {
    HomePage.verifyProductsOrderAscending();
});

When('I search for a specific product {string}', (product) => {
    HomePage.typeInSearch(product);
});

Then('I should see only the searched product {string} in the list', (product) => {
    HomePage.verifyProductSearch(product);
});


