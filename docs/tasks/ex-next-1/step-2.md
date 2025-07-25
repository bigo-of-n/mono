# Server side setup

## Setup
1. Use drizzle orm to connect to the database.
2. Use sqlite.
3. For driver use libsql.
4. Add a new route /dashboard
5. Ignore authentication.
6. Create a table for notes.
7. Create API endpoints for notes.
8. Implement CRUD operations for notes.
9. Create a schema for notes.
10. Create a model for notes.
11. Create Notes type using the schema.

.env file to store configuration variables.

### Notes JSON

```JSON
{
  "id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
