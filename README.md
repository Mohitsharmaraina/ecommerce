🛒 Full Stack MERN E-Commerce PlatformA production-grade full-stack e-commerce solution. This application features a high-performance customer storefront, a secure administrative dashboard for inventory control, and a robust backend integrated with global payment gateways.🌐 View Live Demo | 🚀 Features | 🛠 Tech Stack | ⚙️ Installation🌐 Live DemoComponentURLUser Website[Add Link Here](https://forever-frontend-livid.vercel.app/)Admin Panel[Add Link Here](https://forever-admin-ecru-nine.vercel.app/orders)Backend API[Add Link Here](https://ecommerce-tau-two-52.vercel.app/)🚀 Core Features👤 Customer ExperienceAuthentication: Secure login/signup using JWT and encrypted passwords.Shopping Flow: Browse by collection, filter products, and view detailed descriptions.Cart Management: Add/remove items with specific size and quantity selection.Secure Checkout: Integrated with Stripe for global/local payments.Order Tracking: Real-time status updates and comprehensive order history.🛠 Administrative ToolsDashboard: High-level overview of sales and store performance.Inventory Management: Full CRUD operations for products.Media Handling: Automatic image optimization and uploads via Cloudinary.Order Control: Manage customer orders and update shipping/delivery statuses.🧰 Tech StackLayerTechnologiesFrontendReact 19, Vite, Tailwind CSS, Axios, React ToastifyAdmin PanelReact 19, Vite, Tailwind CSSBackendNode.js, Express.jsDatabaseMongoDB Atlas, MongoosePaymentsStripe, StorageCloudinary (Images)📁 Project StructurePlaintextecommerce-project
│
├── backend     # Express API, Database Models & Payment Logic
├── frontend    # Customer-facing React application
└── admin       # Admin Dashboard React application
⚙️ Environment VariablesCreate a .env file in the respective directories and add the following:🔹 Backend (/backend/.env)Code snippetPORT=5000
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
🔹 Frontend & Admin (.env)Code snippetVITE_BACKEND_URL=https://your-backend-url.com
▶️ Run Locally1. Clone the RepositoryBashgit clone [https://github.com/Mohir/your-repo-name.git](https://github.com/Mohitsharmaraina/ecommerce.git)
cd ecommerce
2. Install DependenciesBash# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install
3. Start Development ServersYou will need to run these in separate terminals:Bash# Start Backend (from /backend)
npm run dev

# Start Frontend (from /frontend)
npm run dev

# Start Admin (from /admin)
npm run dev
🔐 Authentication & SecurityJWT Implementation: Tokens are generated upon login and required for protected routes.Middleware: Separate logic for authUser and authAdmin to ensure data integrity.Password Hashing: Utilizing bcrypt for one-way encryption of user credentials.🖼 Screenshots: HomepageProduct PageCart PageAdmin Dashboard🚧 Future Enhancements[ ] Reviews: Add product ratings and user feedback sections.[ ] Wishlist: Allow users to save items for later.[ ] Coupons: Implement a discount code system at checkout.[ ] Stock Alerts: Automated notifications when inventory is low.👨‍💻 AuthorMohit SharmaFull Stack MERN [DeveloperGitHub](https://github.com/Mohitsharmaraina) | [LinkedIn](https://www.linkedin.com/in/mohit-sharma-82474925a/)
