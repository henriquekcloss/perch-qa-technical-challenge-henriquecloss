import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { paymentData } from '../../fixtures/paymentInformation';
import { shippingAddress } from '../../fixtures/shippingAddress';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';
import SuccessPage from '../../pages/SuccessPage';
import ProfilePage from '../../pages/ProfilePage';

When('I select a product to buy', () => {
    HomePage.clickOnProductByName('Wireless Headphones');
});

When('I choose the quantity {string}', (quantity) => {
    ProductPage.selectQuantity(quantity);
});

When('I click to add the product to the cart', () => {
    ProductPage.addProductToCart();
});

Then('I should see the quantity {string} and the correct total price in the cart', (quantity) => {
    CartPage.verifyQuantitySelected(quantity);
    CartPage.verifySubtotal(quantity);
});

When('I proceed to checkout', () => {
    CartPage.proceedToCheckOut();
});

When('I fill in the shipping information and continue to payment', () => {
    const shippingData = shippingAddress();

    AddressPage.fillDeliveryForm(shippingData);
    AddressPage.continueToPayment();
});

When('I fill in the payment information and Place Order', () => {
    const paymentInformation = paymentData();

    PaymentPage.fillPaymentInformation(paymentInformation);
    PaymentPage.placeOrderClick();
});

Then('I should see the purchase success confirmation screen', () => {
    SuccessPage.verifySuccessContent();
});

Then('the order must be in my order history', () => {
    SuccessPage.viewYourOrders();
    ProfilePage.verifyOrderHistoryAfterPurchase();
});
