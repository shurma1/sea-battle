import express from 'express';
import PlayerController from '../controllers/player.constroller';

const router = express.Router();

router.post('/registration', PlayerController.registration);

export default router;