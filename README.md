## Stree

Stree is a women-centric web application designed to provide essential resources and support for women. The platform offers access to career mentorship, educational resources, and links to helplines. Additionally, it includes a feature (under development) for reporting harassment or unwanted incidents based on location.

## Features
 
- **Career Mentorship**: Access a curated list of resources to help women grow in their careers.
- **Helplines**: Quick links to essential helplines for immediate assistance.
- **Incident Reporting (In Progress)**: A feature that allows women to report harassment or unwanted incidents based on their location.


## Technologies Used

### Frontend

- **React**: Used for building the user interface.
- **React Router**: For client-side routing.
- **Recoil**: State management for React.
- **Leaflet & React-Leaflet**: Used for mapping and location-based services.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.

### Backend

- **Node.js & Express**: Backend framework for handling requests and routing.
- **MongoDB & Mongoose**: Database and ORM for storing and managing data.
- **JWT (jsonwebtoken)**: For handling user authentication and security.
- **Multer**: For handling file uploads.
- **Zod**: For schema validation.
- **bcryptjs**: For hashing passwords.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.


### Steps

1. **Fork the Repository**

2. **Clone the Repository**:
   ```bash
   git clone ${url_of_your_forked_repo}
   cd stree
   ```

3. **Setup the Client**:

    ```bash
    cd client
    npm install
    ```
  
  
4. **Setup the Server**:
    ```bash
    cd ../server
    npm install
    ```



5. **Create a `.env` File**:

   - In the `client` and `server` directories, create a `.env` file and add the necessary environment variables.

   - **Example for `server/.env`**:
     ```plaintext
     MONGO_URI=your_mongodb_uri
     JWT_SECRET_KEY=your_jwt_secret_key
     FRONTEND_URL=http://localhost:xyxy
     ```

   - **Example for `client/.env`**:
     ```plaintext
     VITE_BACKEND_URL=http://localhost:your_backend_port
     ```
   
   Make sure to replace `your_mongodb_uri`, `your_jwt_secret_key`, `localhost:xyxy`, and `localhost:your_backend_port` with the appropriate values based on your local setup.

## Run the Application

1. **Start the backend**

    ```bash
    cd server
    npm run start:dev
    ```
2. **Start the frontend**

    ```bash
    cd ../client
    npm run dev
   ```

## Access the application

- Open your browser and go to http://localhost:3000 to view the application.


## Contributions

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.


## Licence

This project is licensed under the ISC License.