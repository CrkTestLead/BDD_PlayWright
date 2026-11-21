Feature: OrangeHRM Login

# @Smoke
Scenario: Verify OrangeHRM Login

Given Open firefox browser
Given Navigate to app url
When Enter the username
When Enter the password
When Click on Login
Then Verify Welcome Page
When Close the Browser


# @Regression
# Scenario Outline: Retest OrangeHRM Login

# Given Open firefox browser
# Given Navigate to app url
# When Enter the username "<username>"
# When Enter the password "<password>"
# When Click on Login
# Then Verify Welcome Page
# When Close the Browser

# Examples:
#     |username|password|
#     |Playwright|ravikumar|
#     |Playwright|Test|
#     |Test|ravikumar|
#     |Test|Test12|

# @Smoke
# Scenario: Verify OrangeHRM Login

# Given Open firefox browser
# Given Navigate to app url
# When Enter the username
#          |Playwright|
# When Enter the password
#          |ravikumar|
# When Click on Login
# Then Verify Welcome Page
# When Close the Browser

# Scenario: Verify OrangeHRM Login

# Given Open firefox browser
# Given Navigate to app url
# When Enter the username
#          |username|
#          |Playwright|
# When Enter the password
#          |password|
#          |ravikumar|
# When Click on Login
# Then Verify Welcome Page
# When Close the Browser

