import React from "react";
import { Layout } from "antd";
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { AppMenu } from "@pcr/layouts";
import 'antd/dist/antd.css'

import { routerConfig } from "./router";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider theme="light">
              Sider
              <AppMenu menuConfig={routerConfig}></AppMenu>
            </Sider>
            <Content>{renderRoutes(routerConfig)}</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
