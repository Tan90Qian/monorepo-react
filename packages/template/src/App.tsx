import React from "react";
import { RouteComponentProps } from "react-router";
import router from "./router";
import { renderModuleRoutes } from "@mono/utils";

const App = React.memo((props: RouteComponentProps) =>
  renderModuleRoutes(router(props.match), false)
);

export default App;
