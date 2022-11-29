import {
  ADD_VIDEOGAME, 
  DELETE_VIDEOGAME, 
  FILTER_BY_GENRES, 
  FILTER_BY_UBICATION, 
  GET_GENRES, 
  GET_VIDEOGAMES, 
  GET_VIDEOGAME_DETAILS, 
  ORDER_BY_NAME, 
  ORDER_BY_RATING,
  GET_BY_NAME, 
} from "../actions/Const";

const initialState = {
  videogames: [],
  detail: {},
  genres: [],
  filters: [],
  ubication: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
    
        return {
          ...state,
          videogames: action.payload,
          filter: action.payload,
          ubication: action.payload,
      }
    case GET_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_GENRES:
      let getGenre = action.payload;
      getGenre.unshift("genreIncluded");
      return {
        ...state,
        genres: getGenre,
      };
    case FILTER_BY_GENRES:
      let videogames = state.filters;
      let filterGenres =
        action.payload === "genreIncluded"
          ? videogames
          : videogames.filter((v) => v.genres.includes(action.payload));
      if (!filterGenres.length) {
        alert("Not Found");
        return state;
      } else {
        return {
          ...state,
          videogames: filterGenres,
        };
      }
    case ADD_VIDEOGAME:
      return {
        ...state,
        detail: action.payload
      };
    case DELETE_VIDEOGAME:
      return {
        ...state,
      };
    case FILTER_BY_UBICATION:
      let ubication = state.ubication;
      let ubicationFilter =
        action.payload === "DB"
          ? ubication.filter((v) => v.origin === "DB")
          : ubication.filter((v) => v.origin === "API");
      return {
        ...state,
        videogames:
          action.payload === "genreIncluded"
            ? state.ubication
            : ubicationFilter,
      };
    case ORDER_BY_NAME:
      if (action.payload === "A-Z") {
        return {
          ...state,
          filters: [...state.filters].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }
      if (action.payload === "Z-A") {
        return {
          ...state,
          filters: [...state.filters].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }

      return {
        ...state,
      };
    case ORDER_BY_RATING:
      if (action.payload === "Top") {
        return {
          ...state,
          filters: [...state.filters].sort((prev, next) => {
            if (prev.rating > next.rating) return 1;
            if (prev.rating > next.rating) return -1;
            return 0;
          }),
        };
      }
      if (action.payload === "Low") {
        return {
          ...state,
          filters: [...state.filters].sort((prev, next) => {
            if (prev.rating > next.rating) return -1;
            if (prev.rating > next.rating) return 1;
            return 0;
          }),
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
