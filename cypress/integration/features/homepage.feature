Feature: Homepage Navigation

  Scenario: User can navigate to the homepage
    Given I am on the homepage
    Then I should see the main content
    And I should see the full list of products

  Scenario: User can sort products by price
    Given I am on the homepage
    When I sort products by price in ascending order
    Then the products should be displayed from lowest to highest price

  Scenario Outline: User can search for products
    Given I am on the homepage
    When I search for a specific product "<product>"
    Then I should see only the searched product "<product>" in the list

    Examples:
      | product                |
      | Premium Leather Watch  |
      | Wireless Headphones    |
      | Classic White Sneakers |
