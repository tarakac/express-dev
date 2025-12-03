# MongoDB Express REST API - Team [Taraka Nanda Deepthi Chennupati, Haniya Kulsum Lnu]

A RESTful API built with Express.js and MongoDB Atlas following the official MongoDB tutorial.

## 🚀 Features

- ✅ Create new records (POST)
- ✅ Read all records (GET)
- ✅ Read single record by ID (GET)
- ✅ Update records (PATCH)
- ✅ Delete records (DELETE)
- ✅ MongoDB Atlas integration
- ✅ CORS enabled
- ✅ Environment variables with dotenv
## 🛠️ Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with your MongoDB Atlas connection string:
```
   MONGO_URI=your_connection_string_here
   PORT=5000
```
4. Start the server: `npm start`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/record` | Get all records |
| GET | `/record/:id` | Get single record |
| POST | `/record` | Create new record |
| PATCH | `/record/:id` | Update record |
| DELETE | `/record/:id` | Delete record |

## 🧪 Testing

Use curl, Postman, or REST Client to test the endpoints.

Example:
```bash
curl -X POST http://localhost:5000/record \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","position":"Developer","level":"Senior"}'
```
## 📚 Tutorial Reference

This project follows the official MongoDB tutorial:
https://www.mongodb.com/resources/languages/express-mongodb-rest-api-tutorial
