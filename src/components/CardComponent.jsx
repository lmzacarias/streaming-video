import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { getMovieData } from "../api/movies-api";
const { Meta } = Card;

const CardComponent = () => {
  const [dataMovies, setDataMovies] = useState();

  const getDataMovies = async () => {
    const data = await getMovieData();
    setDataMovies(data);
    console.log("Data🟩", data);
  };

  useEffect(() => {
    getDataMovies();
  }, []);

  console.log("data🎉", dataMovies);
  return (
    <>
      {dataMovies && (
        <div>
          <Row gutter={16}>
            {dataMovies.map((movie, index) => (
              <div key={index}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={movie.img} />}
                  >
                    <Meta
                      title={movie.title}
                      description={movie.description}
                    />
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default CardComponent;
