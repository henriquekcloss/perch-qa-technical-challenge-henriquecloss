Feature: Purchase a product
    As a customer
    I want to select and buy a product
    So that I can complete my purchase successfully

    Scenario Outline: Successfully purchasing a product
        Given I am on the homepage
        When I select a product to buy
        And I choose the quantity "<quantity>"
        And I click to add the product to the cart
        Then I should see the quantity "<quantity>" and the correct total price in the cart
        When I proceed to checkout
        And I fill in the shipping information and continue to payment
        And I fill in the payment information and Place Order
        Then I should see the purchase success confirmation screen
        And the order must be in my order history

        Examples:
            | quantity |
            | 1        |
            | 2        |
            | 3        |
            | 4        |
            | 5        |
