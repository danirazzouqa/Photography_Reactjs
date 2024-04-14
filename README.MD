# From Shutter to Screen | Photography Portfolio Web Application

## Introduction
This photography portfolio web application is a specialized platform designed to showcase photographic work, share experiences through blogging, and offer prints for sale. Built on the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, this application provides a robust, scalable solution with a strong focus on aesthetics and user experience. It employs a single-admin model, allowing for streamlined content management by the photographer.

## Key Features
- **Single-Admin Control**: Full control over content management, including uploading, editing, and deleting photographs, blog posts, and print sales information.
- **Secure User Authentication**: Implements JWT for secure login sessions and content management actions.
- **Dynamic Content Management**: Easy-to-use interfaces for managing photography portfolios, blog content, and print sales.
- **Image Optimization**: Automated resizing and format conversion for uploaded images to enhance web performance and user experience.
- **Responsive Design**: Utilizes Tailwind CSS for a responsive layout, ensuring the website looks great on all devices.
- **End-to-End Testing**: Comprehensive testing coverage with Cypress to ensure application reliability and robustness.

## Getting Started

### Prerequisites
Ensure you have Node.js and MongoDB installed on your machine. Git is also required to clone the repository.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danirazzouqa/Photography_Reactjs.git

## Technologies Used
- **MERN Stack**: MongoDB, Express.js, React, and Node.js for a full-stack JavaScript solution.
- **Tailwind CSS**: For styling and responsive design.
- **Cypress**: For end-to-end testing.
- **JWT (JSON Web Tokens)**: For secure authentication.

## Project Structure
- `backend/`: Contains the Express.js and Node.js server application, including API endpoints, models, and authentication logic.
- `frontend/`: Contains the React application, with components, hooks, and styles for the user interface.
- `Cypress/`: Cypress test files for end-to-end testing of the application.

## Security Features
- JWT-based authentication ensures secure access to admin functionalities.
- Password hashing with bcrypt for secure password storage.

## Image Optimization
Utilizes Sharp for image processing, including resizing, format conversion, and optimization for web performance.

## Single-Admin Model
The application is designed around a single-admin model, providing the photographer (admin) with exclusive control over content management. This streamlined approach simplifies operations like uploading new images, managing blog posts, and updating print sale information.

## Feedback and Contact Information
Your feedback is valuable to me! If you have any suggestions, issues, or would like to get in touch, please email me at danirazzouqa@gmail.com or open an issue in the GitHub repository.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
