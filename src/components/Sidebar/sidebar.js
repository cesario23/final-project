import React,{ useState, useEffect} from 'react'
import axios from 'axios'

function Sidebar() {
    const [topAnime, setTopAnime] = useState([]);

    async function handleTopAnimeFetch(){
        try{
            let topAnimeList = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
            console.log(topAnimeList.data.top)
            setTopAnime(topAnimeList.data.top.slice(0, 5))
       

        } catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{
     handleTopAnimeFetch();
    },[])

    return (
        <div style={{textAlign:"center"}}>
            <h1>Top Anime</h1>
            {topAnime.map(anime => (
                <ul>
                <li>
                <a
                href={anime.url}
                target="_blank"
                key={anime.mal_id}
                rel="noreferrer"
                >
                    {anime.title}
                </a>
                <img src={anime.image_url}/>
                </li>
                </ul>
            ))}

        </div>
    )
}

export default Sidebar
