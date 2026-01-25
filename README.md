# 🛒 Full Stack MERN E-Commerce Platform

A production-grade full-stack e-commerce solution. This application features a high-performance customer storefront, a secure administrative dashboard for inventory control, and a robust backend integrated with global payment gateways.

---

## 🌐 Live Demo

| Component | URL |
| :--- | :--- |
| **User Website** | [Click to View](https://forever-frontend-livid.vercel.app/) |
| **Admin Panel** | [Click to View](https://forever-admin-ecru-nine.vercel.app/orders) |
| **Backend API** | [Click to View](https://ecommerce-tau-two-52.vercel.app/) |

---

## 🚀 Core Features

### 👤 Customer Experience
* **Authentication:** Secure login/signup using JWT and encrypted passwords.
* **Shopping Flow:** Browse by collection, filter products, and view detailed descriptions.
* **Cart Management:** Add/remove items with specific size and quantity selection.
* **Secure Checkout:** Integrated with Stripe for global/local payments.
* **Order Tracking:** Real-time status updates and comprehensive order history.

### 🛠 Administrative Tools
* **Dashboard:** High-level overview of sales and store performance.
* **Inventory Management:** Full CRUD operations for products.
* **Media Handling:** Automatic image optimization and uploads via Cloudinary.
* **Order Control:** Manage customer orders and update shipping/delivery statuses.

---

## 🧰 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Axios, React Toastify |
| **Admin Panel** | React 19, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Payments** | Stripe |
| **Storage** | Cloudinary (Images) |

---

## 🔐 Authentication & SecurityJWT Implementation: 
* Tokens are generated upon login and required for protected routes to ensure secure sessions.
* Authorization Middleware: Separate logic for authUser and authAdmin to prevent unauthorized access to sensitive data.
* Password Hashing: Utilizing bcrypt for one-way encryption of all user and admin credentials.
---

## 📁 Project Structure

```
ecommerce-project
│
├── backend     # Express API, Database Models & Payment Logic
├── frontend    # Customer-facing React application
└── admin       # Admin Dashboard React application
---
⚙️ Environment Variables:
Create a .env file in the respective directories and add the following:

Backend (/backend/.env)Code snippet
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

# Payments
STRIPE_SECRET_KEY=your_stripe_secret

# Frontend & Admin (.env)Code snippet
VITE_BACKEND_URL=https://your-backend-url.com

# Run Locally

1. Clone the Repository

Bash git clone https://github.com/Mohitsharmaraina/ecommerce.git
cd ecommerce

2. Install Dependencies

# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install

3. Start Development Servers

You will need to run these in separate terminals:

# Terminal 1: Start Backend (from /backend)
npm run dev

# Terminal 2: Start Frontend (from /frontend)
npm run dev

# Terminal 3: Start Admin (from /admin)
npm run dev
```

## 🚧 Future Enhancements
* **[ ] Reviews:** Add product ratings and user feedback sections.
* **[ ] Wishlist:** Allow users to save items for later.
* **[ ] Coupons:** Implement a discount code system at checkout.
* **[ ] Stock Alerts:** Automated notifications when inventory is low.
---
## 👨‍💻 Author
### Mohit Sharma
### Full Stack MERN Developer

| [Github Profile](https://github.com/Mohitsharmaraina) |
| [LinkedIn Profile](https://www.linkedin.com/in/mohit-sharma-82474925a/) |
---
