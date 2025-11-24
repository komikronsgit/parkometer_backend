import exspress from 'express';

import { 
  getReservations, getReservationsByUsername, getAvailableReservations,
  postReservation, deleteReservationById
} from './controllers/reservationController';

import { getLots, postLot } from './controllers/lotController';

const router = exspress.Router();

router.get('/reservations', getReservations);
router.get('/reservations/user/:username', getReservationsByUsername);
router.get('/reservations/available', getAvailableReservations);

router.post('/reservations', postReservation);
router.delete('/reservations/:id', deleteReservationById);

router.get('/lots', getLots);
router.post('/lots', postLot);

export default router;