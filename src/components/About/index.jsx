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
                &Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus fugiat cum repudiandae rem. Perferendis
                necessitatibus, quisquam dolores blanditiis optio animi tempora
                sunt porro esse quam voluptate delectus non. Dolorem, amet.
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
