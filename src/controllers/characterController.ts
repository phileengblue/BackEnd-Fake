import { Request, Response } from 'express';
import { getCharacters, getCharacterDetails, fetchAllEpisodes, getEpisodeDetails } from '../services/rickymortyService';

export const fetchCharacters = async (_req: Request, res: Response): Promise<void> => {
  try {
    const characters = await getCharacters();
    res.status(200).json({ success: true, data: characters });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchCharacterDetails = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const characterId = parseInt(id, 10);

  if (isNaN(characterId)) {
    res.status(400).json({ success: false, message: 'ID non valido' });
    return;
  }

  try {
    const character = await getCharacterDetails(characterId);
    res.status(200).json({ success: true, data: character });
  } catch (error: any) {
    res.status(404).json({ success: false, message: 'Personaggio non trovato' });
  }
};

export const fetchEpisodes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const episodes = await fetchAllEpisodes();
    res.status(200).json({ success: true, data: episodes });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchEpisodeDetails = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const episodeId = parseInt(id, 10);

  if (isNaN(episodeId)) {
    res.status(400).json({ success: false, message: 'ID dell\'episodio non valido' });
    return;
  }

  try {
    const episode = await getEpisodeDetails(episodeId);
    res.status(200).json({ success: true, data: episode });
  } catch (error: any) {
    res.status(404).json({ success: false, message: 'Episodio non trovato' });
  }
};
