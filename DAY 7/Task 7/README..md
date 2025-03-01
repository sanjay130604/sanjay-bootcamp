**Overview**

This project implements a REST API using Node.js, Express, and MongoDB to manage student data. The API includes pagination for the GET /students endpoint, allowing efficient handling of large datasets.

- GET:  This endpoint retrieves a paginated list of student records, limiting the results based on the specified page number and page size. The request can include query parameters such as page and pageSize, allowing clients to control the subset of records returned. The response includes the requested data along with pagination metadata, such as the total number of students, current page, and total pages, making it easier to navigate large datasets.
