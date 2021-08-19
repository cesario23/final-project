import React, {useState, useEffect} from 'react'
import axios from 'axios'




function Home() {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("")

    function onChange(e){
     let value = e.target.value
     setSearch(value)
    }

    
    async function handleAnimeFetch(anime){
        try{
      let searchAnime = await axios.get(`https:api.jikan.moe/v3/search/anime?q=${anime}&order_by=title&sort=asc&limit=10`)
      console.log(searchAnime.data.results)
      setAnimeList(searchAnime.data.results)
    
        }catch(e){
            console.log(e)
        }
   
    }

    function handleOnClick (e) {
        e.preventDefault();

        handleAnimeFetch(search)
    }


    return (
        <div>
            <div>
             <h1>Search For Anime</h1>
            </div>
            <div>
            <input
            type= "text"
            id="anime"
            key=""
            placeholder="search for an anime...."
            value={search}
            onChange = {onChange}

            />
            <button onClick={handleOnClick}>Search</button>
            </div>
            <div className= "list">
                {animeList.map(anime => (
                    <div className="anime-card">
                      {anime.title}
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Home
