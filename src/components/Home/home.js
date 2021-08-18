import React, {useState, useEffect} from 'react'
import axios from 'axios'




function Home() {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("")

    function onChange(e){
     let value = e.target.value
     setSearch(value)
     console.log(search)
    }

    async function handleAnimeFetch(value){
        try{
      let searchAnime = await axios.get()
        }catch(e){
            console.log(e)
        }
   
    }

    async function handleOnClick(e){
         e.preventDefault();
         console.log("click")
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
            placeholder="search for an anime...."
            onChange = {onChange}

            />
            <button onClick={handleOnClick}>Search</button>
            </div>
        </div>
    )
}

export default Home
