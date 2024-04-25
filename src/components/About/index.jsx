import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="secContainer">
        <h2 className="title">Why Hiking?</h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src="src/assets/mountain.jpg" alt="image name" />
            <h3>100+ Mountains</h3>
            <p>
              Reasearch shows that a chance to break away from the normal
              rythems of daily life reduces stress and improves health and
              well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src="src/assets/customer.png" alt="image name" />
            <h3>2000+ Happy Customers</h3>
            <p>
              Reasearch shows that a chance to break away from the normal
              rythems of daily life reduces stress and improves health and
              well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src="src/assets/hiking.png" alt="image name" />
            <h3>1000+ Hikings</h3>
            <p>
              Reasearch shows that a chance to break away from the normal
              rythems of daily life reduces stress and improves health and
              well-being.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful nature experience there!</h2>
              <p>
                Escape the hustle and bustle of everyday life and embark on a
                journey of tranquility and rejuvenation amidst the pristine
                beauty of nature at RiverRover. Nestled in the heart of
                Alappuzha, our resort offers a truly enchanting experience where
                you can reconnect with the natural world in all its splendor. As
                you step foot onto our grounds, you'll be greeted by the
                soothing melodies of chirping birds and the gentle rustle of
                leaves in the breeze.
              </p>
            </div>

            <div className="cardVideo">
              <video
                src="src/assets/video1.mp4"
                autoPlay
                loop
                muted
                type="video/mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
