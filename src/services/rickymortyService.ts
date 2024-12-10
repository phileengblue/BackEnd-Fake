import axios from 'axios';

export const getCharacters = async (): Promise<any[]> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  } catch (error: any) {
    console.error('Errore nel recupero dei personaggi:', error.message);
    throw new Error('Impossibile recuperare i personaggi.');
  }
};

export const getCharacterDetails = async (characterId: number): Promise<any> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    return response.data;
  } catch (error: any) {
    console.error(`Errore nel recupero del personaggio con ID ${characterId}:`, error.message);
    throw new Error('Impossibile recuperare i dettagli del personaggio.');
  }
};

export const fetchAllEpisodes = async (): Promise<any[]> => {
  let url = 'https://rickandmortyapi.com/api/episode';
  let episodes: any[] = [];

  try {
    while (url) {
      const response = await axios.get(url);
      episodes = episodes.concat(response.data.results);
      url = response.data.info.next;
    }
    return episodes;
  } catch (error: any) {
    console.error('Errore nel recupero degli episodi:', error.message);
    throw new Error('Impossibile recuperare la lista degli episodi.');
  }
};

export const getEpisodeDetails = async (episodeId: number): Promise<any> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
    return response.data;
  } catch (error: any) {
    console.error(`Errore nel recupero dell'episodio con ID ${episodeId}:`, error.message);
    throw new Error('Impossibile recuperare i dettagli dell\'episodio.');
  }
};