const key = process.env.REACT_APP_API_KEY;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horrors`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=actions`,
    requestThriller: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=thrillers`,
    requestTV: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=a`,
    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedies`,
    requestRomance: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romance`,
    requestDrama: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=drama`,
    requestDocumentary: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=documentaries`,
    requestSciFi: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=scifi`,
    requestKorean: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=korea`,
    requestKids: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=kids`,
    requestAnime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=anime`
};

export default requests