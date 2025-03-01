**Overview**
This project provides a simple REST API using Node.js, Express, and MongoDB for managing student data. The API includes three endpoints: GET /students, POST /students, and GET /students/:id, which allow users to interact with student records stored in a MongoDB database.

- GET /students: This endpoint retrieves all student documents from the database and returns them as a JSON array. It allows users to fetch a list of all students, including details like name, age, major, and rollNo/studentId.
- POST /students: This endpoint accepts student data in JSON format and adds it to the database, ensuring that each rollNo/studentId is unique. If successful, it returns a success message with the created student’s ID. If a duplicate rollNo/studentId is found, it returns an error.
- GET /students/:id: This new endpoint retrieves a specific student document based on the provided ID (:id). It returns the JSON representation of the student with the matching ID. If no student is found with the provided ID, the endpoint responds with an appropriate error message and a 404 status code, indicating that the resource was not found.
