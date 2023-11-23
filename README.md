# Zymvol App

This is a React application that allows users to explore Reddit posts from different subreddits. It utilizes Material-UI for a clean and responsive user interface.

## Project Structure

The project is organized as follows:

- **src/components:** Contains React components used in the application.
  - **HomePage:** Main page of the application that includes the NavBar, PostForm, and PostList components.
  - **NavBar:** Navigation bar component with Material-UI AppBar and Button components.
  - **PostForm:** Form component for entering subreddit and sorting options.
  - **PostList:** Component to display a list of Reddit posts.
  - **RedditAPI:** Module for fetching Reddit posts using the Reddit API.

- **src/styles:** Contains CSS files for styling components.

- **src/index.js:** Entry point of the application, where the ReactDOM.render function is used to render the App component.

- **public:** Public assets and the index.html file.

- **App.js:** Main React component that brings together other components.

# Why create-react-app?

This project was bootstrapped using `create-react-app` for simplicity, flexibility and quick start:

## Why Material-UI?

Material-UI is a popular React UI framework that provides a set of pre-designed components with a consistent look and feel, following the Material Design principles. It helps in creating visually appealing and responsive user interfaces while saving development time.

In this project, Material-UI is used for the NavBar component to create a clean and responsive navigation bar with minimal effort. The AppBar, Toolbar, Typography, and Button components from Material-UI are used for a professional-looking design.

## Installation

To run the application locally, follow these steps:

- Clone the repository
- cd zymvol-app
- npm install
- npm start

The application will be accessible at http://localhost:3000 in your web browser.


