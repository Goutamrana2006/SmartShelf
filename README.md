# 📦 SmartShelf – B2B Smart Inventory Optimization Platform

<img width="1907" height="925" alt="Screenshot 2026-06-22 231723" src="https://github.com/user-attachments/assets/5cb23757-9fba-42db-af66-f798887e8e37" />


> 🚀 A full-stack Inventory Management System that enables businesses to efficiently manage products, monitor inventory, receive low-stock alerts, and securely control access using JWT authentication.

---

## 📖 Overview

**SmartShelf** is a modern inventory management platform developed to help businesses manage their warehouse stock digitally. It replaces manual inventory tracking with a secure, responsive, and user-friendly web application.

The system allows authenticated users to:

* 🔐 Register and log in securely
* ➕ Add new products
* 📋 View all products
* ✏️ Update product details
* 🗑️ Delete products
* ⚠️ Receive low stock alerts
* 📊 View dashboard statistics

---

## ✨ Features

### 👤 Authentication

* 🔑 User Registration
* 🔐 User Login
* 🛡️ JWT Authentication
* 🔒 Protected API Routes
* 🚪 Logout Functionality

### 📦 Product Management

* ➕ Add Product
* 📋 View Products
* ✏️ Edit Product
* 🗑️ Delete Product

### 📊 Dashboard

* 📦 Total Products
* 📈 Total Stock
* ⚠️ Low Stock Products
* 🗂️ Total Categories

### ⚠️ Inventory Monitoring

* Automatic Low Stock Detection
* Threshold-Based Alerts

### 💾 Database

* MongoDB Database
* RESTful CRUD APIs

---

## 🛠️ Tech Stack

### Frontend

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript (ES6)

### Backend

* 🟢 Node.js
* 🚀 Express.js

### Database

* 🍃 MongoDB
* Mongoose ODM

### Authentication

* 🔐 JWT (JSON Web Token)
* bcrypt.js

### API Testing

* 📬 Postman

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
SmartShelf/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env (ignored)
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── product.html
│   ├── style.css
│   ├── script.js
│   ├── login.js
│   ├── register.js
│   └── product.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/SmartShelf.git
```

### 2️⃣ Navigate to Backend

```bash
cd SmartShelf/backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create a `.env` File

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### 5️⃣ Start the Server

```bash
npm start
```

Server will run at:

```text
http://localhost:3000
```

---

## 🌐 Running the Frontend

Open the `frontend` folder using **Live Server** in Visual Studio Code.

Open:

```text
login.html
```

or

```text
http://127.0.0.1:5500/login.html
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

### Products

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/products`     | Get All Products   |
| GET    | `/api/products/:id` | Get Single Product |
| POST   | `/api/products`     | Add Product        |
| PUT    | `/api/products/:id` | Update Product     |
| DELETE | `/api/products/:id` | Delete Product     |

### Dashboard

| Method | Endpoint                        | Description          |
| ------ | ------------------------------- | -------------------- |
| GET    | `/api/products/dashboard/stats` | Dashboard Statistics |
| GET    | `/api/products/low-stock`       | Low Stock Products   |

## 🚀 Future Enhancements

* 🔍 Product Search
* 📂 Category Filter
* 📈 Stock Analytics
* 📊 Charts & Graphs
* 👥 Admin & Employee Roles
* 📱 Fully Responsive UI
* ☁️ Cloud Deployment
* 🐍 Python-based Burn Rate Prediction

---

## 🎯 Learning Outcomes

This project helped in learning:

* REST API Development
* JWT Authentication
* MongoDB CRUD Operations
* Express.js Routing
* Frontend-Backend Integration
* Git & GitHub
* API Testing using Postman

---

## 👨‍💻 Author

**Goutam Rana**

* 🎓 BCA Student
* 💻 Full Stack Web Development Enthusiast
* 🤖 Interested in AI & Software Development

---

## ⭐ Support

If you found this project useful:

⭐ Star this repository

🍴 Fork this repository

📢 Share it with others

---

## 📜 License

This project is created for educational and learning purposes.
