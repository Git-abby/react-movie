import React from "react";
// import "./LandingPage.css"; // Custom styles if needed

function LandingPage() {
  return (
    <div className="relative h-[80vh] mt-5">
      {/* YouTube Background Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://www.youtube.com/embed/v-94Snw-H4o?autoplay=1&mute=1&loop=1&playlist=v-94Snw-H4o&controls=0&showinfo=0&modestbranding=1"
        title="YouTube trailer"
        allow="autoplay; fullscreen"
        frameBorder="0"
      ></iframe>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="header-content relative flex flex-col items-center justify-center text-center gap-y-5 h-full z-20 text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold animate-slide-down">
          Unlimited movies, TV shows and more.
        </h1>
        <h3 className="text-2xl md:text-3xl animate-fade-in">Watch anywhere.</h3>
        <p className="text-lg md:text-xl max-w-[600px] animate-fade-in">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="#" className="email-signup flex mt-4">
          <input
            type="email"
            className="text-lg h-13 p-4 focus:outline-none rounded-l-md text-white"
            placeholder="Email address"
            required
          />
          <button
            type="submit"
            className="bg-cyan-700 cursor-pointer border-0 px-6 text-lg text-white rounded-l-none rounded-r-md hover:bg-cyan-800 transition-all duration-300"
          >
            Get Started <i className="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
