### Overview

This project implements a simple REST API using Node.js, Express, and MongoDB for managing student records. The API includes four endpoints: GET /students, POST /students, GET /students/:id, and DELETE /students/:id, which allow users to interact with and manage student data stored in a MongoDB database.

- GET -This endpoint retrieves all student documents from the database and returns them as a JSON array, providing details such as name, age, major, and rollNo/studentId`.

- POST - This endpoint accepts student data in JSON format and adds it to the database, ensuring that each rollNo/studentId is unique. If the student is successfully added, it returns a success message with the created student’s ID. If a duplicate rollNo/studentId is found, it returns an error.

- GET - This endpoint retrieves a specific student document based on the provided ID (:id). It returns the student details in JSON format or an error message if no student is found.

- DELETE - This new endpoint deletes the student document corresponding to the provided ID. If the student is successfully deleted, the API returns a success message confirming the deletion. If no student is found with the given ID, it returns an appropriate error message with a 404 status.
