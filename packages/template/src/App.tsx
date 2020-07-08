import React from "react";
import TemplateFactory from "./factory";
import { Factory } from "@mono/core";

const App = Factory(TemplateFactory).create();

export default App;
