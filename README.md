# Project Three
Team Members
Alex Powarzynski and David Thayer

# Project Description

Our Web Application will take in the user's desired destination. Then provide them with a list of future events in that area from Eventful and local businesses/restaurants from Yelp. If the user sees any events or restaurants they would like to review later they can save them to their saved section. If the user decides they would like to vist the destination they searched they can search for travel pricing on hotels, flights, and rental cars through Kajak based on additional parameters provided via form.

# Flowchart

![FlowChart Image 1](./images/project3diagrampg1.png)
![FlowChart Image 2](./images/project3diagrampg2.png)

# Rough Breakdown of Tasks
Broad front-end functionality (query APIs and recieve response)
-- Eventful Ajax Call Component
-- Kajak Ajax Call Component
-- Yelp Ajax Call Component

Format API responses for specific desired info
-- display results components, search fields, button compontents, etc..

Create User login functionality 
-- incorporate passport for user sign up and login
-- store new usernames/passwords in MongoDB
-- establish React Context to store JSON token and User Search Queries

Create save event and business feature
-- store user's saved events and local businesses in MongoDB
-- nest saved search items in specific User MongoDB entry

Create front end view to display saved results
-- display saved search components buttons, remove feature, etc..

Add authorization access based on user login
-- limit user to only be able to save search items if logged in

Clean up UI Aesthetically
-- Reactstrap for CSS

