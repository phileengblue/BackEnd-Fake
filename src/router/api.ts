import express from 'express';
import { fetchCharacters, fetchCharacterDetails, fetchEpisodes, fetchEpisodeDetails } from '../controllers/characterController';

const router = express.Router();

// Rotte per personaggi
router.get('/characters', fetchCharacters);
router.get('/character/:id', fetchCharacterDetails);

// Rotte per episodi
router.get('/episodes', fetchEpisodes);
router.get('/episode/:id', fetchEpisodeDetails);

export default router;
