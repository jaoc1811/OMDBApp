import React, { useEffect, useState, Fragment } from 'react'

import { Card } from '../components/Card/Card'

export const List = () => {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=53d3e4b9&s=avengers`)
      const data = await res.json()

      setData(data.Search);
      setLoading(false)
    })()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    if (!searchTerm) {
      return setError('Please write a valid text')
    }

    const res = await fetch(`http://www.omdbapi.com/?apikey=53d3e4b9&s=${searchTerm}`)
    const newData = await res.json()

    if(!newData.Search) {
      return setError('There are no results')
    }

    setError('')
    setSearchTerm('')
    setData(newData.Search)
  }

  if (loading){
    return <h3 className="text-light">Loading...</h3>
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={e => setSearchTerm(e.target.value)}
              autoFocus
              value={searchTerm}
            />
          </form>
          {
            error && (
              <div>
                <br/>
                <p className="alert alert-primary">{error}</p>
              </div>
            )
          }
          
        </div>
      </div>
      <div className="row">
        {
          data.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))
        }
      </div>
    </Fragment>
  )
}
