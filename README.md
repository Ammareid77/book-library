# React + Vite

# Book Library Application

## Project Description

This is a Book Library web application built using React, where users can search for books, view detailed information about them, and switch between dark and light modes for a better user experience. The app fetches book data from the Open Library API and displays a list of books based on the search query.

## How to Install & Run the Project

1. Clone this repository to your local machine.
2. install the required dependencies.
3. Run the Application: Open this [URL](http://localhost:3000) in your browser to see the app in action.

## Key Features:

1. Search for Books: Users can search for books by title, author, or subject.
1. Book Details: Users can view detailed information about each book, including title, author, and cover image.
1. Dark Mode Toggle: Users can toggle between light and dark mode using an interactive button.
1. Responsive Design: The app is fully responsive, providing a smooth experience across devices.

## Tech Stack Used

1. React: A JavaScript library for building user interfaces.
2. React Router: A library for handling routing within the React app.
3. React Context API: For managing state (used for dark mode).
4. CSS: Styling the components using traditional CSS (no Tailwind).
5. Open Library API: Provides books data via an external API.
6. Jest & React Testing Library: Used for unit and integration testing.

## Known Issues or Limitations

1. No User Authentication.
2. The user can not back directly to the previous page, but instead they will back to the home page.
3. The app can not safe any data related to users, such as favorite books list or previous search.
