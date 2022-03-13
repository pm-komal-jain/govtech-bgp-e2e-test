Feature: Contact details form
  As an Applicant, I should be able to answer a set of Yes/No Eligibility questions in the Eligibility page.

  Scenario: As an Applicant, I should be able to input values for the Main Contact Person
    Given User is logged-in and on MRA form
    When User clicks on Contact details section
    And User fills in all Main Contact Person Details and saves
    |Name      |Job Title|Contact No|Email                 |Alternate Email|
    |Komal Jain|Sr. SDET |88888888  |jain.komal06@gmail.com|new@gmail.com  |
    Then Contact details draft should be successfully saved

  Scenario: As an Applicant I should be able to enter postal code and Mailing address should be auto-populated and can reload page
    Given User is on Contact details section
    When User Enters postal code as '520405'
    Then Mailing address should be auto-populated
        |House|Street|
        |405  |TAMPINES STREET 41|
    And User reloads form
    Then Postal code should be reset

  Scenario: As an Applicant I should be able to use Mailing address from company profile
    Given User is on Contact details section
    When User checks the Same as registered address in Company Profile checkbox
    Then Mailing address should be auto-populated
         |House|Street|
         |320  | BUKIT BATOK STREET 33|

  Scenario: As an Applicant I should be able to enter Letter Of Offer Addressee details
    Given User is on Contact details section
    When Enters Letter Of Offer Addressee details and hits Save
    Then Letter Of Offer Addressee details should be successfully updated in Draft

  Scenario: As an Applicant I should be able to retrieve MRA form draft and update Same as main contact person
    Given User selects MRA application from Drafts
    When clicks on Proceed button
    And Updates Same as main contact person checkbox and clicks Save
    Then Letter Of Offer Addressee details should be updated as main contact person details
