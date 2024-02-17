import express from 'express';
import PlayerController from '../controllers/player.constroller';

const router = express.Router();

router.post('/registration', PlayerController.registration);
router.post('/login', PlayerController.login);
router.get('/:id', PlayerController.get);

export default router;