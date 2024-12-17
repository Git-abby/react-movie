
# React Movie App

## Description

The React Movie App is a web application that allows users to browse movies, search by title, and filter by genres using The Movie Database (TMDb) API. This app demonstrates the use of modern React features, such as hooks, React Router for navigation, and dynamic data fetching.

---

## Features

- **Popular Movies:** Displays a list of popular movies fetched from the TMDb API.
- **Search Functionality:** Allows users to search for movies by title.
- **Genre Filtering:** Users can browse movies by genres, with the option to filter results.
- **Responsive Design:** Fully responsive interface, optimized for both desktop and mobile devices.
- **Authentication:** Users can sign up and log in using Firebase Authentication.

---

## Screenshots

### Login and Signup
![SignIn](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20144838.png)
![SignUp](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20144858.png)

### Homepage
![Homepage](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20145349.png)

### Search Results
![SearchResults](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20145415.png)

### Favorites
![Favorites](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20145545.png)

### Filter by Genre
![FilterByGenre](/frontend/src/assets/screenshots/Screenshot%202024-12-17%20150213.png)

*Select a genre to see movies of that category.*

---

## Installation

Follow the steps below to set up the project locally:

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- TMDb API key

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Git-abby/react-movie.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-movie/frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `frontend` directory and add the following environment variables:

   ```env
   REACT_APP_API_KEY=your_tmdb_api_key
   REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_PROJECT_ID=your_firebase_project_id
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Deployment

The app is deployed using Vercel. To deploy your own version:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Run the deployment command:

   ```bash
   vercel
   ```

3. Follow the CLI prompts to complete the deployment.

---

## Folder Structure

```
react-movie/
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── css/         # Custom stylesheets
│   │   ├── pages/       # Page components (Home, Login, SignUp, GenreMovies)
│   │   ├── App.jsx      # Main app component
│   │   ├── index.js     # Entry point
│   ├── package.json
├── .gitignore
├── README.md
```

---

## APIs Used

### TMDb API

- **Base URL:** `https://api.themoviedb.org/3`
- **Endpoints:**
  - `/movie/popular` - Fetch popular movies
  - `/search/movie` - Search movies by query
  - `/genre/movie/list` - Get a list of movie genres
  - `/discover/movie` - Get movies by genre

### Firebase Authentication

- Used for user signup and login functionality.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [TMDb API](https://www.themoviedb.org/documentation/api) for providing movie data.
- [Firebase](https://firebase.google.com/) for authentication.
- React, Vite, and TailwindCSS for powering the frontend.

---

## Developer

Developed by [Git-abby](https://github.com/Git-abby/).
