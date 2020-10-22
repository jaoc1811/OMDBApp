import React from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

export const Card = ({ movie }) => {
  return (
    <div className="col-md-4">
      <Link to={`/movie/${movie.imdbID}`} >
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100" />
        <div className="card-body">
          <h4>{movie.Title} {movie.Year}</h4>
          <p>{movie.Type}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  movie : PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
    imdbID: PropTypes.string
  }).isRequired
}