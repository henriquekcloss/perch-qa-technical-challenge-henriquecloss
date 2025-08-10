Feature: Profile Page Navigation

    Scenario: User can check information on Profile page
        Given I am on the Profile page
        Then I should see my information
        And my order history

    Scenario Outline: User can edit their profile information
        Given I am on the Profile page
        When I update my profile with name "<name>" and email "<email>" and save the changes
        Then my updated information with name "<name>" and email "<email>" should be displayed

        Examples:
            | name     | email             |
            | Henrique | henrique@test.com |
