import React, { useEffect } from "react";
import { getMovieData } from "../api/movies-api";
import { Layout, Menu, Breadcrumb, notification } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import imgUmet from "../assets/umet.png";
import Card from "./CardMain";
import { SmileOutlined } from "@ant-design/icons";
import CarouselComponent from "./ui/CarouselComponent";

const { Header, Content, Footer, Sider } = Layout;

const Main = ({ history }) => {
  const openNotification = () => {
    notification.open({
      message: "Trabajando",
      description: "Módulo en construcción",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const pageOne = () => {
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
              openNotification();
            }}
          >
            Películas
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              openNotification();
            }}
          >
            Series
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              openNotification();
            }}
          >
            Anime
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Switch>
          <Route exact path="/" component={Card} />
        </Switch>
      </Content>
      {/*  <CarouselComponent /> */}

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
