🛒 Full Stack E-Commerce Website

A complete MERN stack e-commerce platform with user shopping experience, admin dashboard, authentication, product management, and online payments.

Built with React, Node.js, Express, MongoDB, and deployed on Vercel.

🚀 Features
👤 User Side

User registration & login (JWT authentication)

Browse products by collection

View detailed product pages

Add to cart with size selection

Place orders

Stripe & Razorpay payment integration

View order history

Profile management

🛠 Admin Panel

Secure admin authentication

Add / edit / delete products

Upload product images (Cloudinary)

View all customer orders

Update order status

Dashboard for store management

🧰 Tech Stack
Frontend (User Website)

React 19

Vite

React Router

Axios

Tailwind CSS

React Toastify

Admin Panel

React 19

Vite

Tailwind CSS

Axios

Backend

Node.js

Express

MongoDB + Mongoose

JWT Authentication

Bcrypt (password hashing)

Multer (file uploads)

Cloudinary (image hosting)

Stripe & Razorpay (payments)

📂 Project Structure
ecommerce-project/
│
├── backend/      → Express API + Database
├── frontend/     → Customer shopping website
└── admin/        → Admin dashboard

⚙️ Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Admin Credentials
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

# Payments
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret


For frontend and admin, create .env:

VITE_BACKEND_URL=https://your-backend-url.com

▶️ Running Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies

Backend

cd backend
npm install


Frontend

cd ../frontend
npm install


Admin Panel

cd ../admin
npm install

3️⃣ Start Development Servers

Backend

npm run dev


Frontend

npm run dev


Admin

npm run dev

💳 Payment Integration

Stripe for international payments

Razorpay for local payments

Secure order creation handled from backend

🌐 Deployment

This project is deployed using:

Frontend & Admin: Vercel

Backend: Vercel / Render / Railway (any Node hosting)

Database: MongoDB Atlas

Images: Cloudinary

🔐 Authentication Flow

JWT token stored on login

Token sent in headers for protected routes

Separate middleware for:

User authentication

Admin authentication

📸 Screenshots (Add Yours Here)

You can add screenshots like:

/screenshots/homepage.png
/screenshots/product-page.png
/screenshots/admin-dashboard.png

📌 Future Improvements

Product reviews & ratings

Wishlist feature

Coupon / discount system

Email notifications

Inventory stock alerts

👨‍💻 Author

Developed as a full-stack e-commerce project to demonstrate real-world MERN development skills.
