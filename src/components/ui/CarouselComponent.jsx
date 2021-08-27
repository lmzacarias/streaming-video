import React from "react";

import { Carousel } from "antd";
import imgUmet from "../../assets/umet.png";

const CarouselComponent = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#FFF",
  };
  const imgStyle = {
    width: "100%"
  };

  return (
    <div className="carousel-main">
      <Carousel afterChange={onChange} autoplay={false}>
        <div style={imgStyle}>
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
            alt=""
          />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
