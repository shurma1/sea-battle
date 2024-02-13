import express from 'express';
import playerRouter from './player.router';
const router = express.Router();

router.use('/player', playerRouter);

export default router;