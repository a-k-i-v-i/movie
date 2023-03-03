import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../../lib/ApiKey";
import {BsStarFill} from 'react-icons/bs'

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    const url = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
    );
    const { data } = url;
    await setPopular(data.results);
  };

  useEffect(() => {
    getPopular();
  }, []);
  console.log(popular);
  return (
    <section id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <div className="pop">
              <img src={`https://www.themoviedb.org/t/p/w1280/${el.backdrop_path}`} alt="" />
              <h1>{el.title}</h1>
              <p>{el.release_date}</p>
              <div className="rating">
              <h3>{el.vote_average}</h3>
              <BsStarFill className="star"/>
              <BsStarFill className="star"/>
              <BsStarFill className="star"/>
              <BsStarFill className="star"/>
              <BsStarFill className="star"/>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
