Feature: Manage typicode posts

Scenario: Create a new post in typicode
     When James wants to create a new post with
     | title |foo |
     | body  |bar |
     | userId| 1  |
     Then he validates that it was created correctly

Scenario: Consult all post in typicode 
     When James wants to consult the posts
     Then he validates that it was consulted correctly