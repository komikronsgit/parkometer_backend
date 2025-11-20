import exspress from 'express';

import { getReservations, postReservation, deleteReservation } from './controllers/reservationController';
import { getLots, postLot } from './controllers/lotController';

const router = exspress.Router();

router.get('/reservations', getReservations);
router.post('/reservations', postReservation);
router.delete('/reservations/:id', deleteReservation);

router.get('/lots', getLots);
router.post('/lots', postLot);

export default router;