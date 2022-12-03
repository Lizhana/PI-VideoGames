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
  users:[]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
    
        return {
          ...state,
          videogames: action.payload,
          filters: action.payload,
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
        videogames: action.payload
      };
    case FILTER_BY_UBICATION:
      let ubication = state.ubication;
      const ubicationFilter = action.payload === "DataBase"? ubication.filter((elemento) => elemento.createdInDb === true) : ubication.filter((elemento)=> !elemento.createdInDb)
      
      return {
         ...state,
        videogames:
         action.payload === "All" ? state.ubication : ubicationFilter,
      };
    case ORDER_BY_NAME:
      let sortName = state.filters
      action.payload === "A-Z" ? sortName.sort(function (a, b) {
         if (a.name.toUpperCase() > b.name.toUpperCase())  return 1
            if (b.name.toUpperCase() > a.name.toUpperCase()) return -1
            return 0;
          })
        : sortName.sort(function (a, b) {
          if (a.name.toUpperCase() > b.name.toUpperCase())  return -1
          if (b.name.toUpperCase() > a.name.toUpperCase()) return 1
             return 0;
           });
      return {
        ...state,
        filters: sortName,
      };
    case ORDER_BY_RATING:
      let sortRat = state.filters
      action.payload === "Top"? sortRat.sort(function(a, b) {
        if (parseInt(a.rating) > parseInt(b.rating) ) return -1
        if (parseInt(a.rating) < parseInt(b.rating) )return 1
        return 0
      })
      : sortRat.sort(function(a, b) {
        if (parseInt(a.rating) > parseInt(b.rating) ) return 1
        if (parseInt(a.rating) < parseInt(b.rating) )return -1
        return 0
      })
    
      return {
        ...state,
        filters: sortRat
    }
    case "POST_USER":
      return {
        ...state,
        user: action.payload
      };

      case "GET_USER":
        return {
          ...state,
          user: action.payload
        };
    default:

      return state;
  }
}
