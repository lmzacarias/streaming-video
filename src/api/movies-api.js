import axios from "axios";

const getMovieData = async () => {
  try {
    const {data} = await axios({
      url: "https://api.themoviedb.org/3/movie/436969?api_key=8771901c3572b14708274a4515777c7c",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error-getMovieData", error);
    return null;
  }
};

export { getMovieData };
