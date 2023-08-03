



import React, { useState } from "react"
import Header from "./Components/Header"
import Search from "./Components/Search"
import MovieCard from "./Components/MovieCard"

function App() {
  const [movies, setMovies] = useState([])

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      const data = await response.json()
      setMovies(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const handleSearch = (query) => {
    fetchMovies(query)
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search onSearch={handleSearch} />
        <div className="movies-section">
          {movies.map((movie) => (
            <MovieCard
              key={movie.show.id}
              name={movie.show.name}
              rating={movie.show.rating?.average}
              type={movie.show.type}
              site={movie.show.image?.medium}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;


