**Overview**

This project implements a REST API using Node.js, Express, and MongoDB to manage student data, with enhanced input validation to ensure data integrity. The API includes four endpoints: GET /students, POST /students, GET /students/:id, and DELETE /students/:id, which interact with student records stored in a MongoDB database.

- To ensure the accuracy and validity of the data being processed, input validation is added to all endpoints. This includes checks for required fields, correct data types, and length restrictions on all fields, including rollNo/studentId.

- GET /students: Retrieves all student records and returns them as a JSON array. Input validation ensures no erroneous data can be retrieved.

- POST /students: Accepts student data (e.g., name, age, major, rollNo/studentId). The endpoint validates that required fields are present, data types are correct (e.g., age is a number), and that rollNo/studentId is unique. If validation fails, it returns an error message.

- GET /students/:id: Retrieves a specific student document by ID. Input validation checks that the provided ID is a valid format.

- DELETE /students/:id: Deletes a student based on the provided ID. The ID is validated to ensure it is in the correct format before attempting deletion.
