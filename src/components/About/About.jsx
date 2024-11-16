import "./About.css";
import authorImage from "../../assets/me.svg";

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img src={authorImage} alt="Author" className="about__image" />
      </div>
      <div className="about__content">
        <h1 className="about__title">About the author</h1>
        <p className="about__description">
        My name is Andrew Thomas, I’m a chef-turned-coder with a creative background in the service industry, music, and construction. My passion for technology led me to TripleTen’s Software Engineering program, where I mastered full-stack development with the MERN stack and learned to build user-friendly, impactful software.
        </p>
        <p className="about__description">
        I thrive on creativity, adaptability, and a user-focused approach to problem-solving. Whether crafting seamless user experiences or tackling complex challenges, I bring dedication and innovation to every project I take on.
        </p>
      </div>
    </div>
  );
}

export default About;
