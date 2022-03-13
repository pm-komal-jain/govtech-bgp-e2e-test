Feature: Eligibility form
  As an Applicant, I should be able to answer a set of Yes/No Eligibility questions in the Eligibility page.

  Scenario: As a user I am able to login successfully on BGP portal
    Given User is on BGP home page
    When User clicks on Login button
    And User enters login details - EntityId as 'BGPQEDEMO' UserId as 'S1234567A' UserRole as 'Acceptor' and name as 'Tan Ah Kow'
    Then User is successfully logged in

  Scenario: As a user I can initiate the flagship MRA BGP grant request which can be saved as draft
    Given User is logged in on BGP
    When User clicks on Get New Grant from Under My grants section
    And User chooses sector as 'IT', reason as 'Bring Business Overseas' and grant plan as 'MRA' and applies
    Then An untitled draft is successfully created under MyApplications > Drafts

  Scenario: As a user I can retrieve previously created MRA draft which has 6 sections to fill in
    Given User is logged in on BGP
    When User selects MRA application from Drafts
    And clicks on Proceed button
    Then Grants form should load and it has 6 sections to fill in

  Scenario: As a user I can fill in my eligibility info through Yes/No questions
    Given User is on MRA Grants form
    When User clicks on Eligibility link from left panel
    Then There are 5 questions with Yes-No radio buttons each

  Scenario: As a user I can choose Yes or No for my eligibility Or reload page
    Given User is on MRA Grants form
    When User choose 'Yes' for First question and 'No' for Second
    Then A warning strip appears on the form
    And User reloads the form
    Then All Yes or No answers are unset

  Scenario: As a user I can save my eligibility record and retrieve from drafts later
    Given User is on MRA Grants form
    When User fills in all eligibility questions as 'Yes'
    And User click on Save button
    Then Record is successfully updated under MyApplications > Drafts

