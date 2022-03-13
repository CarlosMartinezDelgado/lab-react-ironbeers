import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";

function ListBeers() {
  const [beers, setBeers] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setBeers(response.data);
      setFetching(false);
    } catch (err) {
      return "Vuelve a intentarlo";
    }
  };

  if (fetching) {
    return (
      <div>
        <ClipLoader color="#2F6DA8" size="50px" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h2>LIST BEER</h2>
      {beers.map((eachBeer) => {
        return (
          <div className="infoBeer">
            <div className="infoImg">
              <img src={eachBeer.image_url} alt="beer" width="50px" />
            </div>
            <div>
              <Link to={`/beers/${eachBeer._id}`}>
                <p>{eachBeer.name}</p>
              </Link>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
