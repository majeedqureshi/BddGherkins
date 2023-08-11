Feature: Gmail home page title validation
@smoketest
Scenario: validate gmail home page title
Given launch gmail site
Then title is "Gmail" for home page
And close site
@smoketest
Scenario: Validate userid visibility
Given launch gmail site
Then Userid field is displayed
And close site
@smoketest
Scenario: validate gmail home page title
Given launch gmail site
Then title is "Abc" for home page
And close site