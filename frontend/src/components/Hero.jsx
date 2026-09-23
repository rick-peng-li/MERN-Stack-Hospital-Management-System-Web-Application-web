import PropTypes from "prop-types";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            ZeeCare Medical Institute connects patients, doctors, and
            administrators in one streamlined hospital workflow. Patients can
            register, send inquiries, and book appointments, while the admin
            dashboard manages doctors, messages, and appointment decisions in
            real time.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Hero;
