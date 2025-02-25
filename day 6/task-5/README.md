**overview**

This is a basic Node.js application using the Express framework. The app exposes a simple API with the following functionality:

- GET /: The root route (/) returns a welcome message with basic instructions on how to interact with the API.
- GET /users: This endpoint returns an array of all users in JSON format.
- GET /users/:id: This endpoint allows fetching a specific user by their id. If the user is found, their details are returned as a JSON response. If no user is found, a 404 error with a message "User not found" is returned
