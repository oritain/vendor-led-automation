Feature: Login to provenorigin

  
  Scenario: Login to dev provenorigin
    When open the provenorigin page
    Given username and password
    Then verify user is landed on dashboard page
    And welcome message is displayed