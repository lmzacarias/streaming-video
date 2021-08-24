import React, { useEffect } from "react";
import { getMovieData } from "../api/movies-api";
import Card from "./Card";
const Main = () => {
  const init = async () => {
    const getData = await getMovieData();
    console.log("🎉", getData);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div>Main</div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Main;
