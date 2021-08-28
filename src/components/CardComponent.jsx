import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal } from "antd";
import { getMovieData } from "../api/movies-api";
const { Meta } = Card;

const CardComponent = () => {
  const [dataMovies, setDataMovies] = useState();
  const [visible, setVisible] = useState(false);
  const [videolink, setvideolink] = useState();
  const getDataMovies = async () => {
    const data = await getMovieData();
    setDataMovies(data);
    console.log("Data🟩", data);
  };

  const loadVideo = (linkMovie) => {
    console.log(linkMovie);
    setvideolink(linkMovie);
    setVisible(true);
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
                    onClick={() => {
                      loadVideo(movie.link);
                    }}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={movie.img} />}
                  >
                    <Meta title={movie.title} description={movie.description} />
                  </Card>
                </Col>
              </div>
            ))}
          </Row>

          {visible && videolink && (
            <Modal
              title="Reproductor"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              footer={false}
              width={1000}
            >
              <div style={{ textAlign: "center", height: "500px" }}>
                <video
                  controls
                  height="450"
                  width="900"
                  src={videolink}
                ></video>
              </div>
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default CardComponent;
