**Overview**
This project implements a simple REST API using Node.js, Express, and MongoDB to manage student data. The API provides two primary endpoints: a GET endpoint and a POST endpoint for interacting with student records.

- GET /students: This endpoint retrieves all student documents from the MongoDB database and returns them as a JSON array. It allows users to view all stored student information such as name, age, major, and rollNo/studentId.
- POST /students: This endpoint accepts student data in JSON format (including fields like name, age, major, and rollNo/studentId) and saves it to the MongoDB database. It ensures that the rollNo/studentId is unique, preventing duplicate entries. If the student is successfully added, the API returns a success message with the created student’s ID. If a duplicate rollNo/studentId is detected, the endpoint returns an error with a detailed message indicating the conflict.
