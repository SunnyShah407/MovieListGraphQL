import {gql} from '@apollo/client';

export const QUERY_MOVIE_LIST = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
          }
        }
      }
    }
  }
`;

export const QUERY_MOVIE_DETAIL = gql`
  query Film($filmId: ID) {
    film(filmID: $filmId) {
      created
      director
      id
      producers
      releaseDate
      title
      openingCrawl
    }
  }
`;
