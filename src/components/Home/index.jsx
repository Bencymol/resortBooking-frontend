import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Find Your Retreat</h1>
          <p className="subTitle">
            Elevate your senses, indulge in serenity, and let the rhythm of
            nature be the soundtrack to your retreat.
          </p>
          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="DreamDestination" />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder="ll/meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="6000-10000" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
