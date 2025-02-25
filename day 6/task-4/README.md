**Overview**

This is a simple Express.js application that demonstrates a basic API for managing users. The server handles two primary operations:
- GET /users/:id: Fetches a user by their unique ID. If the user is found, the server returns the user's data in JSON format. If the user is not found, it returns a 404 status with a "User not found" message.
- POST /users: Allows for adding new users. The user sends a name in the request body. If no name is provided, the server returns a 400 status with an error message. When a new user is successfully added, the server assigns them a new ID and returns a success message.
