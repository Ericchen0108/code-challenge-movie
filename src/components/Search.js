import React from 'react'

function Search( {handleInput, handleInputYear, handleInputMovieType, search }) {
    return (
       <section className="searchbox-wrap">
           <form action="">
            <input 
                type="text" 
                className="searchbox" 
                placeholder="Search the movie"
                onChange={handleInput}
                onKeyPress={search}
            />
            <input
                type="text" 
                className="searchbox" 
                placeholder="Year"
                onChange={handleInputYear}
                onKeyPress={search}
            />
            <select class="searchbox" onChange={handleInputMovieType}
                onKeyPress={search} >
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
                
            /></select>
            {/* TODO Add year, movie type and submit button */}
            {/* <input 
                type="submit" 
                className="submit-btn" 
                value="Submit"        
            /> */}
           </form>
       </section>
    )
}

export default Search
