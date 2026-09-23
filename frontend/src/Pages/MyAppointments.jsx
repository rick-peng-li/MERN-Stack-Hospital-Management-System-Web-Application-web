import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import api from "../utils/api";

const MyAppointments = () => {
  const { isAuthenticated } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await api.get("/api/v1/appointment/mine");
        setAppointments(data.appointments);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to load your appointments."
        );
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchAppointments();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const { data } = await api.delete(`/api/v1/appointment/cancel/${appointmentId}`);
      setAppointments((currentAppointments) =>
        currentAppointments.filter((appointment) => appointment._id !== appointmentId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel appointment.");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="container my-appointments">
      <div className="appointments-header">
        <h2>My Appointments</h2>
        <p>Review upcoming visits and remove requests that are still waiting for confirmation.</p>
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length > 0 ? (
        <div className="appointments-grid">
          {appointments.map((appointment) => (
            <article className="appointment-card" key={appointment._id}>
              <div className="appointment-card-head">
                <h3>{appointment.department}</h3>
                <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
              </div>
              <p>
                Doctor: {appointment.doctor.firstName} {appointment.doctor.lastName}
              </p>
              <p>Date: {appointment.appointment_date}</p>
              <p>Visited Before: {appointment.hasVisited ? "Yes" : "No"}</p>
              <p>Address: {appointment.address}</p>
              <button
                type="button"
                className="cancel-appointment-btn"
                onClick={() => handleCancelAppointment(appointment._id)}
                disabled={appointment.status === "Accepted"}
              >
                {appointment.status === "Accepted"
                  ? "Contact Hospital To Cancel"
                  : "Cancel Appointment"}
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="appointments-empty">
          <h3>No appointments found</h3>
          <p>Your submitted appointments will appear here after booking.</p>
        </div>
      )}
    </section>
  );
};

export default MyAppointments;
