import exspress from 'express';

import { getReservations } from './controllers/reservationController';
import { postReservation } from './controllers/reservationController';

const router = exspress.Router();

router.get('/reservations', getReservations);
router.post('/reservations', postReservation);

export default router;