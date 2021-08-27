import React from "react";
import AspectRatio from "../utils/AspectRatio";
import CardComponent from "./CardComponent";

const CardMain = () => {
  return (
    <>
      <div className="card-main">
        <CardComponent />

        {/* <img
          className="card-img"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
          alt=""
        /> */}
        {/*  <AspectRatio ratio={9 / 16}>
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
        </AspectRatio> */}
      </div>
    </>
  );
};

export default CardMain;
