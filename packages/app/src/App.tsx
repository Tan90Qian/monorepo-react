import React from "react";
import { Layout } from "antd";
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routerConfig } from "./router";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider theme="light">Sider</Sider>
          <Content>
            <Router>{renderRoutes(routerConfig)}</Router>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
