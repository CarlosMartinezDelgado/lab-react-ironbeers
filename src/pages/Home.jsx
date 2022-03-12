import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <div>
        <img src={beers} alt="beer" />
        <br />
        <Link to="/beers">Todas las Cervezas</Link>
      </div>
      <br />
      <div>
        <img src={randomBeer} alt="randombeer" />
        <br />
        <Link to="/randomBeer">Cerveza Aleatoria</Link>
      </div>
      <br />

      <div>
        <img src={newBeer} alt="newbeer" />
        <br />
        <Link to="/newBeer">Añadir Cerveza</Link>
      </div>
    </div>
  );
}

export default Home;
