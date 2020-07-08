import React from "react";
import { observer } from "mobx-react";

import {Injectable } from '@mono/core'

import { TemplateStore, TemplatePresenter } from "./model";
import ListView from "./views/list.view";

@Injectable()
export default class TemplateFactory {
  constructor(
    private store: TemplateStore,
    private presenter: TemplatePresenter
  ) {}

  create() {
    return observer(() => <ListView />);
  }
}
