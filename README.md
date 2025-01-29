# Get API

A simple Express.js API that returns user details, the current date and time in UTC format, and a GitHub URL.

## 🚀 Features
- Returns JSON response with user details and current UTC datetime.
- Lightweight and easy to deploy.
- Handles CORS for cross-origin requests.
- Follows RESTful principles.

## 🛠 Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/amiabl-programr/get-api.git
cd get-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Project
```sh
node index.js
```

The server will start on `http://localhost:3000`.

## 🌍 Handling CORS
This API allows cross-origin requests by using the `cors` middleware. Ensure it is installed:

```sh
npm install cors
```

Then, import and use it in your Express app:
```js
const cors = require('cors');
app.use(cors());
```

## 📌 API Documentation

### **Endpoint:** `https://get-api-six.vercel.app/`
**Method:** `GET`

#### ✅ Request
No request body is required.

#### ✅ Response
Returns a JSON object with the following fields:

```json
{
  "email": "oluwayemivictor15@gmail.com",
  "current_datetime": "2024-01-29T12:00:00.000Z",
  "github_url": "https://github.com/amiabl-programr/get-api"
}
```

#### 📝 Example Usage
```sh
curl http://localhost:3000/
```

## 🔗 Hire Developers
Looking for top-tier developers? Check out these links:
- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

## 📜 License
This open-source project is available under the [MIT License](LICENSE).

---

### 🎯 Contribution
Feel free to fork this repository, submit issues, or make pull requests to improve the project!

