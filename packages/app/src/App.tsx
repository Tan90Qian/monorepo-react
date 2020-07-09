import React from "react";
import { Layout } from "antd";

import Template from "@mono/template";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <Router>
              <Switch>
                <Route path="/" component={Template}></Route>
              </Switch>
            </Router>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
