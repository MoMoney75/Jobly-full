# Welcome to Jobly!  

## Overview  
Jobly is a job search application that offers a complete user profile, including profile editing, authentication, and authorization. Once registered, users can browse open positions across various companies and search for jobs by company names. You can try Jobly at https://jobly-express.surge.sh/

Our **Quick Apply** feature allows users to apply swiftly, saving valuable time. Applied jobs are marked as **"Applied"** to prevent duplicate applications for the same position.  

- **Frontend**: Built with **Create React App** to provide a beautiful and user-friendly interface.  
- **Backend**: Developed using **Node.js** and the **Express** framework.  
- **Database**: Powered by **PostgreSQL** to manage and query data efficiently.  

⚠️ *Note: The seed data used for companies and job listings is for demo purposes only; it does not reflect real-world data.*  

---

## Cloning the Project  

The project is divided into two main directories:  
1. **FrontendV2**  
2. **backend**  

Both directories contain their own `package.json` files to manage dependencies.  

### Step-by-Step Setup  

1. **Install Dependencies**  
   - Navigate to each directory (`FrontendV2` and `backend`) in your terminal.  
   - Run the following command in each directory:  
     ```bash
     npm install
     ```

2. **Start the Frontend Server**  
   - From the `FrontendV2` directory, start the React development server:  
     ```bash
     npm start
     ```  
   - This will run the frontend on **localhost:3000**.  

3. **Start the Backend Server**  
   - From the `backend` directory, start the backend server:  
     ```bash
     npm start
     ```  
   - The backend will run on **localhost:3001**.  
   - Alternatively, you can use **Nodemon** for hot-reloading:  
     ```bash
     npm dev
     ```  

4. **Run Tests**  
   - Navigate to the relevant directory and run:  
     ```bash
     npm test
     ```  
   - Tests are built using **Jest**.

---

## Final Thoughts  
We hope you enjoy exploring the Jobly application! Feel free to fork, clone, and explore the code to understand how the front and backends integrate to provide seamless functionality.
