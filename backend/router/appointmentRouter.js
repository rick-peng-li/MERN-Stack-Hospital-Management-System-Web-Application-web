import express from "express";
import {
  cancelMyAppointment,
  deleteAppointment,
  getAllAppointments,
  getMyAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.get("/mine", isPatientAuthenticated, getMyAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.delete("/cancel/:id", isPatientAuthenticated, cancelMyAppointment);

export default router;
