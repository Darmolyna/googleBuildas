Feature: Google Exploratory Test Validation

    Application regression

    @signUp
    Scenario: Google Privacy Policy Page functionality
    Given I navigate to base URL
    When I click the Privacy Policy page button
    Then I validate the Privacy Policy page displays

    Scenario: Google Business Page functionality
    Given I navigate to base URL
    When I click the Business page button
    Then I validate the Business page displays