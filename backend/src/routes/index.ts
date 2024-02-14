import express from 'express';
import PlayerRouter from './player.router';
const router = express.Router();

router.use('/player', PlayerRouter);

export default router;