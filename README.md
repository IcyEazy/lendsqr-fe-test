# Lendsqr Web Application Documentation

Welcome to the documentation for the Lendsqr web application. This documentation will provide you with comprehensive information on how to understand, use, and extend the application. Lendsqr is built with React, SCSS, CSS and it aims to give loans to eligible clients.

## Table of Contents

1. Lendsqr Web Application
2. Technologies Used
3. Installation
4. Usage
   - Navbar
   - Sidebar
   - Login Page
   - Dashboard
   - Users Page
   - User Details Page
   - Navbar Search Option
   - Filter Users List or User
   - Explore Users
   - Explore User's Details
5. Testing
6. Contributing
7. Contact

## Lendsqr Web Application

The purpose of this application is to provide a user-friendly platform for loan finders.

## Technologies Used

**React**: The application is built using the React JavaScript library, allowing for efficient and modular development of user interfaces.
**Typescript**: TypeScript is a programming language that adds extra functionality to JavaScript. JavaScript was never intended to drive complex frontend and backend applications.
**Redux** :Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
**SCSS**: SCSS allows you to define variables to store commonly used values such as colors, font sizes, and spacing.
**DB json**: The frontend application communicates with backend json database to fetch users data, and perform other necessary operations.
**Jest**: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

## Installation

> To install and set up Lendsqr web application on your local machine, follow these steps:

1. Clone the repository: git clone <https://github.com/IcyEazy/lendsqr-fe-test.git>
2. Navigate to the project directory: cd lendsqr-assessment
3. Install the dependencies: npm install
4. Just incase the mocky api endpoint <https://run.mocky.io/v3/cee76889-f53b-4d1d-8dc5-b130abb13c54> doesn't work. Run the command: "npm run json-server db.json" to initialize the database and change the axios.get endpoint to <http://localhost:3005/users>
5. Start the development server: npm start
6. Open your web browser and visit: <http://localhost:3000>

## Usage

Once the installation is complete, you can start using Lendsqr web application. Below are the key features and functionalities provided by the application:

## Features

**Navbar**: The application has a navbar which contains the organization's logo, search bar, and admin user profile avatar and name.
**Sidebar**: The application has a sidebar which contains the links for the admin to navigate to their respective pages.
**Login Page**: The web application displays the login page as the first page on initial load of the application.
**Dashboard**: The application displays the dashboard after successful login.
**Users Page**: The application displays a list of users from the database. This page can be assessed by the admin by clicking on the users tab link in the sidebar.
**User Details Page**: The application gives the admin the opportunity to view the details of a specific user by clicking on the option icon [three vertical dots] at the right end of the user's profile and clicking on the view details cta text.

### Navbar Search Option

The Navbar allows you to **search** for a specific user or some list of users that match the search criteria. This search can be achieved by typing in the search bar on the navbar. This filters the users base on the search criteria. This search can be achieved by:

1. Entering your search criteria in the search bar.
2. Clicking the search button or press Enter.

### Filter Users List or User

The filter box components allows you to **filter** for a specific user or some list of users that match the filter criteria. This filters the users based on the filter options; organization, username, email, phone number, date, and status and by clicking on the Filter button. The Reset button can be used to reset the filter options. This filtering can be achieved by:

1. Clicking on any of the table header filter icon to open the filter box.
2. Entering the filter criteria in the filter fields of your choice.
3. Clicking the Filter button.

### Explore Users

Lendsqr web application provides **tabular information** of the users. To explore the users, follow these steps:

1. Click on the users tab link on the sidebar.
2. The application will navigate to the users page.
3. On the users page, you can find information such as organization, username, email, phone number, date joined and status, all in tabular format.

**Link to view in development** - <http://localhost:3000/users'>

### Explore User's Details

Lendsqr web application provides **comprehensive information** of a specific user. To explore the user's details, follow these steps:

1. Click on the view details cta text on the more option icon at the right end of the user's profile.
2. The application will navigate to the user's details page.
3. On the user's details page, you can find information such as name, email, phone number, and address, profile picture, social links, guarantors information, and more.
4. Scroll down to know more about the user's profile.

**Link to view in development** - <http://localhost:3000/user-details/user._id>

## Testing

The application testings were done using jest and other necessary react testing library.

1. Navigate to the tests folder.
2. To run all the tests, run the command: npm test src/tests.
3. To run a specific test, run the command: npm test src/tests/test-folder/test-file.js.

## Contributing

If you want to contribute in any way [bugs, suggestions or new features], please follow the steps below:

1. Fork the repository.
2. Create a new branch for your contribution: git checkout -b my-contribution
3. Make your changes and perform necessary tests.
4. Commit your changes: git commit -m "Add my contribution"
5. Push to the branch: git push origin my-contribution
6. Open a pull request with a clear description of your changes.

## Contact

If you have any questions, suggestions, or need assistance with the Lendsqr web application, please contact our support team at <israelcollins1409@gmail.com>.
