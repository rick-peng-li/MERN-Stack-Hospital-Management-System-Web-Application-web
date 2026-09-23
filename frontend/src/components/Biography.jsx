import PropTypes from "prop-types";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ZeeCare is designed as a practical hospital management system for
            day-to-day patient intake, appointment scheduling, and
            administration. The public website focuses on access and service
            discovery, while the dashboard supports secure back-office
            operations.
          </p>
          <p>
            The stack combines React and Vite on the client side with Express,
            MongoDB, and JWT authentication on the server. This gives the
            project a clean separation between patient-facing flows and admin
            management features.
          </p>
          <p>Departments, doctors, appointment records, and contact messages all stay connected through API-driven flows.</p>
          <p>That makes the project suitable both as a learning resource and as a solid base for further product work.</p>
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;
