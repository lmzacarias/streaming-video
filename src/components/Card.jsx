import React from "react";
import AspectRatio from "../utils/AspectRatio";

const Card = () => {
  return (
    <>
      <div className="card-main">
        {/* <img
          className="card-img"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
          alt=""
        /> */}

        <AspectRatio ratio={9 / 16}>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
            alt="vehicle"
            className="w-full"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </AspectRatio>

        <div className="card-text" style={{ marginTop: 20 }}>
          Pelicula
        </div>
      </div>
    </>
  );
};

export default Card;
