import express from "express"
import {
  createReservationHandler,
  getReservationHandler,
  getReservationsHandler,
  updateReservationHandler,
  deleteReservationHandler,
} from "../controllers/reservation.controller"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken"

const router = express.Router()


// CREATE A RESERVATION
router.post("/", verifyUser, createReservationHandler)

// GET A RESERVATION
router.get("/:id", verifyUser, getReservationHandler)

// GET ALL RESERVATIONS
router.get("/", verifyAdmin, getReservationsHandler)

// UPDATE A RESERVATION
router.put("/:id", verifyUser, updateReservationHandler)

// DELETE A RESERVATION
router.delete("/:id", verifyUser, deleteReservationHandler)

export default router
