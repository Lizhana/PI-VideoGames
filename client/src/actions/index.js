import {
  FILTER_BY_GENRES,
  FILTER_BY_UBICATION,
  GET_BY_NAME, 
  GET_GENRES, 
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAILS, 
  ORDER_BY_NAME,
  ORDER_BY_RATING,

  General_Search,
  Details_Search,
  Genres_Search,
} from "./Const";
import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    try {
      const res = await axios.get('http://localhost:3001/videogames');

      return dispatch({ type: GET_VIDEOGAMES, payload: res.data });
    } catch (err) {
      console.log(err)
    }
  };
};


export function getVideogamesByName(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      return dispatch({ type: GET_BY_NAME, payload: res.data });
    } catch (err) {
      return err;
    }
  };
};


export function getVideogamesById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/videogame/${id}`);


      return dispatch({
        type: GET_VIDEOGAME_DETAILS,
        payload: res.data,


      });
    } catch (err) {
      console.log(err);
    }
  };
};

export function getGenres() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${Genres_Search}`);
      return dispatch({
        type: GET_GENRES,
        payload: res.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function postVideogame(payload) {
  return async function (dispatch) {
    try {
      var res = await axios.post(`${General_Search}`, payload)
      return res
    } catch (error) {
      console.log(error);
    }
  };
};

export function deleteVideogame(id) {
  return async function () {
    try {
      let res = await axios.delete(`${Details_Search}/${id}`)
      return res;
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterByGenres(payload) {
  return {
    type: FILTER_BY_GENRES,
    payload
  }
};

export function filterByUbication(payload) {
  return {
    type: FILTER_BY_UBICATION,
    payload
  }
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload
  }
};

export function orderByRating(payload) {
  return {
    type: ORDER_BY_RATING,
    payload
  }
};