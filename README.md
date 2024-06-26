# MERN Stack Cloud Hosting App


This is a Cloud Hosting built using the MERN (MongoDB, Express.js, React, Node.js) stack. It consists of two main parts: Frontend And Backend.

### Dashboard Features:
- Dashboard
- Add Admin
- Add Plan
- Add User
- See all Plans
- See all Orders
- Manage Plans

### Backend Features:
- Manages all frontend features

### Frontend Features:
- Buy Plan
- Send Message to admin
- Login / Register

## Technologies Used:

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Rander

## Setup Instructions:

1. **Clone the repository:**

git clone https://github.com/kamleshjat7782/cloudhosting.git


2. **Install dependencies:**

npm install


3. **Set up environment variables:**

- Create a `.env` file in the root directory.
- Define the following environment variables:

  ```
  PORT=8080
  MONGODB_URI=your_mongodb_connection_string
  DEV_MODE = Development
  JWT_SECRET = JWT_SECRET
  BRAINTREE_MERCHANT_ID = 
  BRAINTREE_PUBLIC_KEY = 
  BRAINTREE_PRIVATE_KEY = 

  ```

4. **Run the development servers:**

- Start the frontend server:

  ```
  npm start
  ```

- Start the backend server:

  ```
  npm start
  ```

5. **Access the application:**

Open your browser and navigate to `http://localhost:3000`.

## Contributing:

Contributions are welcome! Feel free to submit pull requests, bug reports, feature requests, or any suggestions to improve this project.

## License:

This project is licensed under the [MIT License](LICENSE).
