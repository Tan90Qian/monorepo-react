import React from "react";
import TemplateFactory from "./factory";
import { Factory } from "@mono/core";

//@ts-ignore
const App = Factory(TemplateFactory).create();

export default App;
