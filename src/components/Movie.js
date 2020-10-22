import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const Movie = () => {

  const { id } = useParams()

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=53d3e4b9&i=${id}`)
      const data = await res.json()
      setMovie(data)
      setLoading(false)
    })()
  }, [id])

  const ratings = () => (
    movie.Ratings.map(rating => (
    <p className="mb-0"><small>{rating.Source}: {rating.Value}</small></p>
    ))
  )

  if (loading) {
    return <h3 className="text-light">Loading...</h3>
  }

  return (
    <div className="card mb-3 col-md-12 p-2">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={movie.Poster} className="card-img" alt={movie.Title} />
        </div>
        <div className="col-md-8 p-4">
          <div className="card-body">
            <h5 className="card-title">{movie.Title} - {movie.Year} </h5>
          </div>
          <p className="card-text" style={{ display: "flex", justifyContent: "space-between" }}><small>Genre: {movie.Genre}</small> <small>Duration: {movie.Runtime}</small></p>
          <p className="card-text text-dark" style={{ textAlign: "justify" }} >{movie.Plot}</p>
          {ratings()}
        </div>
      </div>
    </div>
  )
}
