**Overview**

This project implements a REST API using Node.js, Express, and MongoDB for managing student data. A new GET /students/search endpoint has been added to allow searching for students by their roll number or student ID.

- `GET` : This endpoint allows clients to search for students by either their roll number or student ID. The search is case-insensitive, making it more flexible and user-friendly. The query parameter q is used to specify the roll number or student ID to search for. The API returns a JSON array of students whose roll number or student ID matches the search query. If no matching students are found, the response will either return an empty array or an appropriate message indicating no results.
