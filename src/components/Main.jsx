import React, { useEffect } from "react";
import { getMovieData } from "../api/movies-api";
import { Layout, Menu, Breadcrumb } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import imgUmet from "../assets/umet.png";
import Card from "./Card";
const { Header, Content, Footer, Sider } = Layout;

const Main = ({history}) => {
  const init = async () => {
    const getData = await getMovieData();
    console.log("🎉", getData);
  };
  useEffect(() => {
    init();
  }, []);
  const pageOne = () => {
    console.log("page one 🎉");
    history.push("/peliculas");
  };

  return (
    <Layout>
      <Header className="header">
        <img src={imgUmet} alt="" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
          <Menu.Item
            key="1"
            onClick={() => {
              pageOne();
            }}
          >
            Películas
          </Menu.Item>
          <Menu.Item key="2">Series</Menu.Item>
          <Menu.Item key="3">Anime</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Switch>
          <Route exact path="/peliculas" component={Card} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Powered by{" "}
        <span>
          <strong>UMET</strong>
        </span>
      </Footer>
    </Layout>
  );
};

export default Main;
