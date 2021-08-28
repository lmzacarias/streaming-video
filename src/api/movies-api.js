import axios from "axios";
import asyncForEach from "./async-for";

const getMovieData = async () => {
  const movies = [497698, 1726, 68721, 10138, 557];
  const film = [
    "https://firebasestorage.googleapis.com/v0/b/streaming-video-d0e86.appspot.com/o/Marvel%20Studios%20celebra%20a%20las%20pel%C3%ADculas.mp4?alt=media&token=f35f097f-283d-4fa2-a89c-ea40d724bc1c",
    "https://firebasestorage.googleapis.com/v0/b/streaming-video-d0e86.appspot.com/o/Iron%20Man%20(2008)%20Trailer%20%231%20_%20Movieclips%20Classic%20Trailers.mp4?alt=media&token=3e4f58c9-299c-4463-b8d0-1236b73a9d5e",
    "https://firebasestorage.googleapis.com/v0/b/streaming-video-d0e86.appspot.com/o/Iron%20Man%202%20Trailer%20%232%20(2010)%20-%20Marvel%20Movie%20HD.mp4?alt=media&token=0b31968b-1d5c-4059-a866-463fbc9cabfa",
    "https://firebasestorage.googleapis.com/v0/b/streaming-video-d0e86.appspot.com/o/Iron%20Man%203_%20Tr%C3%A1iler%202%20Oficial%20Doblado%20--%20Latinoam%C3%A9rica.mp4?alt=media&token=a5149d3d-787b-47b9-93a7-6b60c80ac3da",
    "https://firebasestorage.googleapis.com/v0/b/streaming-video-d0e86.appspot.com/o/Spider-Man_%20Sin%20Camino%20a%20Casa%20_%20Teaser%20Tr%C3%A1iler%20Oficial%20_%20Marvel%20Studios.mp4?alt=media&token=b65bbd3d-324d-47df-9b70-44faa500e3a6",
  ];

  try {
    let dataResponse = [];
    await asyncForEach(movies, async (item, index) => {
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
        description: data.tagline,
        link: film[index]
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
