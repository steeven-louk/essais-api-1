import React, { useEffect, useState } from "react";
import "./styles/Home.scss";

import axios from "axios";
import Anime from "./Anime";

function Home() {
  const [anime, setAnime] = useState([]);
  const [query, setQuery] = useState("");
  const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    const result = await axios.get(url);
    setAnime(result.data.results);
  };

  const submitForm = (e) => {
    e.preventDefault();
    getAnime();
    setQuery("");
  };
  const updateSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section className="anime">
      <div className="anime__container">
        <h1 className="anime__title">anime collection</h1>

        <div className="form-search">
          <form onSubmit={submitForm}>
            <input type="text" value={query} onChange={updateSearch} />
            <button type="submit">search</button>
          </form>

          <div className="container1">
            {anime.slice(0, 20).map((item) => {
              return (
                <div className="animeItem">
                  <Anime item={item} key={item.mal_id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
