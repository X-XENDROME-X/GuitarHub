<h1 align="center">GuitarHub 🎸</h1>

<p align="center">
  <img src="public/images/logo.png" alt="GuitarHub Logo" width="300" />
</p>

GuitarHub is a dynamic, full-stack web application crafted for guitar enthusiasts. It offers a rich blend of educational resources, community interaction, and practical tools. Built using the MERN stack—MongoDB, Express, React, and Node.js—and containerized with Docker and deployed on Google Cloud using Cloud Run, Container Registry, and Cloud Build. GuitarHub showcases modern web development practices, RESTful API design, database integration, responsive design, and cloud-native deployment strategies.

---

## 🎸 About GuitarHub

GuitarHub serves as a centralized platform where guitar learners and enthusiasts can access structured learning materials, share knowledge, and engage with a like-minded community. Unlike static websites, GuitarHub offers interactive features such as a community discussion board and a contact form, fostering collaboration and direct communication. The platform combines theoretical knowledge with practical engagement, making it an ideal tool for both beginners and advanced players.

---

## 🚀 Live Demo

Frontend: https://guitarhub-frontend-631049126756.us-central1.run.app

Backend API: https://guitarhub-backend-631049126756.us-central1.run.app

---

## 🛠️ Technologies Used

**Frontend:**

- **React:** JavaScript library for building dynamic user interfaces.
- **Vite:** Fast build tool and development server optimized for React.
- **JavaScript (ES6+):** Core scripting language for interactivity.
- **CSS:** Custom styles for a responsive and visually appealing design.

**Backend:**

- **Node.js:** JavaScript runtime for executing server-side code.
- **Express:** Minimal web framework for building RESTful APIs.
- **MongoDB Atlas:** Cloud-hosted NoSQL database for storing discussion posts, contact messages, and other dynamic data.

**Cloud & DevOps:**

- **Docker:** Platform for containerizing the application, ensuring consistency across different environments.
- **Docker Compose:** Tool for defining and running multi-container applications (frontend, backend, and database).
- **Google Cloud Run:** Serverless platform for deploying and scaling containerized applications (frontend and backend).
- **Google Container Registry:** Secure storage and management of Docker images used for deployments.
- **Google Cloud Build:** Automates the build and deployment pipeline, ensuring efficient CI/CD workflows.

**DevOps & Deployment:**
- CI/CD principles with containerization, Cloud Build integration, and Cloud Run deployments.

**Web Server:**

- **Nginx:** High-performance web server used to serve the React frontend efficiently.

**Development Tools:**
- **Git:** Version control system for managing code changes and collaboration.
- **Google Cloud CLI**: Command-line interface for Google Cloud resource management
- **npm**: Package manager for JavaScript dependencies

---

## ✨ Features

- **Interactive User Interface:** Responsive design that adapts to desktops, tablets and mobile devices, built with React and styled with custom CSS.
- **Community Discussion Board:** Allows users to post questions, share tips, and engage with the guitar community.
- **Contact Form:** Enables users to send messages or feedback directly to the site maintainers.
- **Learning Resources:** Provides structured lessons, chord diagrams, and multimedia content (videos, PDFs) to support self-paced learning.
- **Containerized Setup:** Entire application is Dockerized, allowing for easy local development and consistent environments across machines.
- **Google Cloud Deployment:** Live hosting with auto-scaling, efficient resource usage, and CI/CD integration using Cloud Run, Container Registry, and Cloud Build.

---

## 🗂️ Project Structure

```

GUITARHUB
├── backend
│   ├── models
│   │   ├── contact.js         # Mongoose schema for contact form submissions
│   │   └── Post.js            # Mongoose schema for discussion board posts
│   ├── routes
│   │   ├── contact.js         # API endpoints for handling contact form data
│   │   └── Posts.js           # API endpoints for managing discussion posts
│   ├── .dockerignore          # Excludes unnecessary files from the backend Docker image
│   ├── .env.example           # Template for backend environment variables
│   ├── Dockerfile             # Dockerfile for building the backend image
│   ├── package.json           # Backend dependencies and scripts
│   └── server.js              # Express server setup and API logic
├── public
│   ├── images
│   │   └── logo.png           # Project logo used in the README and UI
│   ├── resources              # Static learning materials (e.g., PDFs)
│   └── videos                 # Video tutorials for guitar lessons
├── src
│   ├── components
│   │   ├── Footer.jsx         # Reusable footer component
│   │   └── Nav.jsx            # Navigation bar component
│   ├── pages
│   │   ├── Chords.jsx         # Page displaying guitar chord diagrams
│   │   ├── Contact.jsx        # Contact form page for user inquiries
│   │   ├── Discussion.jsx     # Community discussion board page
│   │   ├── Home.jsx           # Homepage with an introduction to GuitarHub
│   │   ├── Lessons.jsx        # Structured guitar lessons page
│   │   └── Resources.jsx      # Page linking to additional learning materials
│   ├── App.jsx                # Main React app component with routing
│   ├── main.jsx               # Entry point for the React application
│   └── styles.css             # Global CSS styles for the frontend
├── .dockerignore              # Excludes files from the frontend Docker image
├── .env.example               # Template for frontend environment variables
├── .gitignore                 # Excludes sensitive and unnecessary files from Git
├── docker-compose.yml         # Configuration for Docker services (frontend, backend)
├── Dockerfile                 # Dockerfile for building the frontend image
├── index.html                 # HTML template for the React app
├── nginx.conf                 # Nginx configuration for serving the frontend
├── package.json               # Frontend dependencies and scripts
├── vite.config.js             # Vite configuration for the React app

````

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account to set up database cluster.

---

## 🚀 Installation

Follow these steps to set up and run GuitarHub locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/X-XENDROME-X/GuitarHub.git
   cd GuitarHub
   ```

2. **Set up the backend environment:**

   * Copy the example environment file:

     ```bash
     cp backend/.env.example backend/.env
     ```

   * Edit `backend/.env` and replace `<your-mongodb-atlas-uri>` with your MongoDB Atlas connection string:

     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/GuitarHub?retryWrites=true&w=majority&appName=guitarhub
     PORT=4000
     ```

   **Note:** Keep your `backend/.env` file private, as it contains sensitive database credentials.

3. **Build and run the application:**

   ```bash
   docker-compose up --build
   ```

4. **Access the application:**

   * Open your browser and navigate to `http://localhost`.

---

## 🧪 Usage

Once the application is running:

* **Navigate the Site:** Use the navigation bar to explore different pages.
* **Engage with Content:** View lessons, chords, and resources, or participate in discussions.
* **Submit Feedback:** Use the contact form to send inquiries or suggestions.

For developers, the project is structured to allow easy modification of frontend components, backend logic, or Docker configurations, demonstrating adaptability and scalability.

---

## 📄 Pages Overview

### 🏠 Home (`/`)

* **Purpose:** Introduces users to GuitarHub with a welcome message and an overview of available features.
* **Content:** A brief introduction, featured resources, and a call to explore.
* **Use:** Ideal for first-time visitors to understand the platform’s value.

### 🎓 Lessons (`/lessons`)

* **Purpose:** Provides structured guitar lessons, from beginner to advanced levels.
* **Content:** Step-by-step guides, techniques, and practice tips.
* **Use:** Helps users improve their skills with curated learning paths.

### 🎵 Chords (`/chords`)

* **Purpose:** Offers a comprehensive library of guitar chord diagrams.
* **Content:** Visual chord charts with finger positions and variations.
* **Use:** Assists players in mastering chord transitions and progressions.

### 📚 Resources (`/resources`)

* **Purpose:** Centralizes additional learning materials like PDFs and videos.
* **Content:** Links to downloadable resources and multimedia tutorials.
* **Use:** Supports self-paced learning with diverse media formats.

### 💬 Discussion (`/discussion`)

* **Purpose:** Facilitates community interaction and knowledge sharing.
* **Content:** A board where users can post questions, share tips, and reply to others.
* **Use:** Encourages collaboration and problem-solving among guitar enthusiasts.

### ✉️ Contact (`/contact`)

* **Purpose:** Allows users to send inquiries or feedback to the maintainers.
* **Content:** A form with fields for name, email, and message.
* **Use:** Provides a direct communication channel for support or suggestions.

---


## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -m 'Add your feature'
   ```

4. **Push to your branch:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a pull request.**

Please adhere to the existing code style and include tests where applicable. This process reflects best practices in open-source collaboration and version control.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

