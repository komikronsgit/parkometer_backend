import express from 'express';

// === Controllers ===
import { 
  getReservations, 
  getReservationsByUsername, 
  getAvailableReservations,
  postReservation, 
  deleteReservationById,
  putStartAndEndTimeById
} from './controllers/reservationController';

import { 
  getLots, 
  postLot,
  updateLot,
  deleteLot
} from './controllers/lotController';

import { 
  confirmPassword, 
  postUser
} from './controllers/userController';

import { 
  addSpot, 
  getSpots 
} from './controllers/spotController';

import { adminLogin } from './controllers/adminController';

// === Middleware ===
import { adminAuth } from './middleware/adminAuth';

const router = express.Router();


// ==========================
//   RESERVATIONS
// ==========================
router.get('/reservations', getReservations);
router.get('/reservations/user/:username', getReservationsByUsername);
router.get('/reservations/available', getAvailableReservations);
router.post('/reservations', postReservation);
router.delete('/reservations/:id', deleteReservationById);
router.put('/reservations/:id', putStartAndEndTimeById);


// ==========================
//   LOTS (ADMIN WRITE)
// ==========================
router.get('/lots', getLots);
router.post('/lots', adminAuth, postLot);
router.put('/lots/:id', adminAuth, updateLot);
router.delete('/lots/:id', adminAuth, deleteLot);


// ==========================
//   USERS
// ==========================
router.post('/users/confirm', confirmPassword);
router.post('/users', postUser);


// ==========================
//   ADMIN LOGIN
// ==========================
router.post('/admin/login', adminLogin);


// ==========================
//   SPOTS (ADMIN WRITE)
// ==========================
router.get('/spots', getSpots);
router.post('/spots', adminAuth, addSpot);


export default router;
