import express from 'express';

import { 
  getReservations, 
  getReservationsByUsername, 
  getAvailableReservations,
  postReservation, 
  deleteReservationById
} from './controllers/reservationController';

import { getLots, postLot } from './controllers/lotController';
import { confirmPassword, postUser } from './controllers/userController';

import { addSpot, getSpots } from './controllers/spotController';

const router = express.Router();

// === Reservations ===
router.get('/reservations', getReservations);
router.get('/reservations/user/:username', getReservationsByUsername);
router.get('/reservations/available', getAvailableReservations);
router.post('/reservations', postReservation);
router.delete('/reservations/:id', deleteReservationById);

// === Lots ===
router.get('/lots', getLots);
router.post('/lots', postLot);

// === Users ===
router.post('/users/confirm', confirmPassword);
router.post('/users', postUser);

// === 🆕 Spots ===
router.get('/spots', getSpots);
router.post('/spots', addSpot);

export default router;
