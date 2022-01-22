import React from "react";

import "./styles/Anime.scss";

function Anime({ item }) {
  return (
    <section className="card__anime">
      <div className="card">
        <div className="card-img">
          <img src={item.image_url} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">
            <a href={item.url}> {item.title}</a>
          </h1>
          <span>episode :{item.episodes}</span>
        </div>
        <div className="card-desc">
          <p>{item.synopsis}</p>
        </div>
      </div>
    </section>
  );
}

export default Anime;
