import '../../css/About.css'

function About() {
  return (
    <div className="about">
      <h2 className="title">About</h2>
      <p className="welcome-text">
        Welcome to the Movie List App! This application allows you to browse
        popular movies and search for your favorite titles using real-time data
        fetched from a movie database API.
      </p>
      <h3 className="sub-title">Key Features</h3>
      <ul>
        <li>Browse a list of trending and popular movies.</li>
        <li>Search for movies by title using the search bar.</li>
        <li>View movie details like release date, rating, and synopsis.</li>
      </ul>
      <h3 className="sub-title">Technology Used</h3>
      <p>
        This app is built with <strong>React</strong>, styled with{" "}
        <strong>CSS</strong>, and integrates with a movie database API for
        fetching up-to-date movie information.
      </p>
      <h3 className="sub-title">Connect with the Developer</h3>
      <p>
        Developed by <strong>Git-abby</strong>. Check out more of my projects on <a className='link'
          href="https://github.com/Git-abby/"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default About;
