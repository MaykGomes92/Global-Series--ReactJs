export const API_KEY = "6701d1e498fbe7fd0293b5d88571d651";
export const API_URL = "https://api.themoviedb.org/3/";

export function RETORNAR_DETAILS(id) {
  return {
    url: `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
  };
}

export function MOVIES_MENU(name) {
  return {
    url: `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=${name}`,
  };
}

export function EPSODIOS_SEASON(id,numberSeason){
  return {
    url: `${API_URL}tv/${id}/season/${numberSeason}?api_key=${API_KEY}&language=en-US`
  }
}
