**Overview**

This project sets up a simple Express.js server with an endpoint to fetch user details by their ID. The server stores a list of example users, and when you send a GET request to /users/:id, it returns the corresponding user data in JSON format. If the user is not found, the server responds with a 404 status and an error message.

- GET /users/:id: Fetch a user by their ID from the example user data. If the user exists, a JSON object with the user's details is returned. Otherwise, a 404 error with a message "User not found" is sent.
- Clone the repository, install the required dependencies, and run the server. The app will be accessible at port:3000. You can test the endpoint by accessing /users/{id} where {id} is the ID of the user you want to retrieve.

