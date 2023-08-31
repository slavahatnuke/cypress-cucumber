Feature: duckduckgo.com

  Background:
    Given Duck Duck go world

  Scenario: X1
    When I visit duckduckgo.com
    Then I should see a search bar
    Then Say "Hello World"

