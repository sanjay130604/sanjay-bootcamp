**Overview**

This is a Node.js application using the Express framework to create a simple user management API with file-based storage. It includes the following functionalities:

- POST /users: Allows you to add a new user by providing a name in the request body. The API performs several validation checks:
- Ensures the name is a non-empty string.
- Ensures the name is at least 3 characters long.
- Ensures that the name is unique (i.e., no duplicate names exist).
