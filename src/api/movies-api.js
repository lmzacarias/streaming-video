import axios from "axios";
import asyncForEach from "./async-for";

const getMovieData = async () => {
  const movies = [497698, 1726, 68721, 10138, 299534];

  try {
    let dataResponse = [];
    await asyncForEach(movies, async (item) => {
      const { data } = await axios({
        url: `https://api.themoviedb.org/3/movie/${item}?api_key=8771901c3572b14708274a4515777c7c`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dataResponse.push({
        img: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`,
        title: data.original_title,
        description: data.tagline
      });
    });
    //console.log("data", dataResponse);
    return dataResponse;
  } catch (error) {
    console.log("Error-getMovieData", error);
    return null;
  }
};

export { getMovieData };
