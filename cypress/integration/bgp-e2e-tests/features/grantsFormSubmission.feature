Feature: MRA grants form
  As an Applicant, I should be able to input values for the Main Contact Person and Letter of Offeree in the Contact Details page.

  Scenario: As an Applicant after filling in half details in MRA form on submitting for review I should see valid error messages
    Given User is logged-in and on MRA form
    When User enters Eligibility and Contact details
    And User Goes to Declare & Review section and clicks on Review
    Then Incomplete sections should show error count in left side panel

  Scenario: As an Applicant after filling all details and submitting for review I should see read only summary
    Given User is on MRA Grants form
    When User fills in all details in all 6 sections
    And User Goes to Declare & Review section and clicks on Review
    Then User is on readonly summary page and all details match

  Scenario: As an Applicant I after filling details I should be able to give consent and submit my application
    Given User is on readonly summary page and all details match
    When I click on Consent and Acknowledge button
    And Submit Application
    Then Success message should be generated with a Reference Id and Agency details
    Then My Grants dashboard should show the Application under the Processing tab
