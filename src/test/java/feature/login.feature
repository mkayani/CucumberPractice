Feature: Login into account
  Exisiting stackoverflow user should be able to log into account
  using correct credentials.

  Scenario: Log into account with correct details
    Given User navigates to stackoverflow website
    And User clicks on the login button on homepage
    And User enters valid username
    And User enters valid password
    When User clicks on the login button
    Then the user should be taken to the successful login page


