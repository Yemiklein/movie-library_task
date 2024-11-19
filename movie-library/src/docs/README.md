# Movie Library Application

This is a Movie Library application built with **Next.js** and **TypeScript**. It allows users to browse a collection of movies, view detailed information about each movie, and more.

## Features
- Displays a list of movies.
- Fetches detailed information about a movie.
- Responsive design for mobile and desktop views.

## Technologies Used
- **Next.js** (for server-side rendering and routing)
- **TypeScript** (for type safety)
- **TailwindCSS** (for styling)
- **TMDb API** (for fetching movie data)

## Prerequisites

Before setting up the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Yarn](https://yarnpkg.com/) (Optional, but recommended for package management)
- [Git](https://git-scm.com/) (for version control)

## Setup Instructions

Follow these steps to get the project running locally:

1. **Clone the repository**
   
   Open your terminal and run the following command to clone the project:

   ```bash
   git clone https://github.com/Yemiklein/movie-library_task

2. Navigate into the project folder
    cd movie-library

3. Install dependencies
  yarn install (or npm install)

4. Run the application
     yarn dev (or npm run dev)


   Design Choices
1. Next.js & TypeScript
Next.js is chosen for its hybrid static & server-side rendering, which allows better SEO and faster page loads. Using TypeScript ensures type safety, making the development process more reliable and reducing runtime errors.
2. TMDb API
The movie data is fetched from the TMDb API, which provides comprehensive data about movies, TV shows, and actors. The API was chosen because it is free and well-documented.
3. TailwindCSS
TailwindCSS is used for styling because it allows for a highly customizable and efficient workflow. Instead of writing custom CSS, Tailwind uses utility classes, making the development process faster and more maintainable.
4. File Structure
The application uses the app directory structure introduced in Next.js 13 for better organization of routes, components, and data fetching. This structure improves code readability and allows for incremental adoption of features such as React Server Components.
5. Responsiveness
The design is fully responsive, ensuring that the application looks great on both mobile and desktop devices. TailwindCSS's built-in responsive utilities make it easy to achieve this.
6. Client-Side Rendering
The useEffect and useState hooks are used in the client components to fetch and display movie data, while the server-side component (getServerSideProps or getStaticProps) handles the initial page load.
