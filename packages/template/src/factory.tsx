import React from "react";
import { observer } from "mobx-react";

import { Injectable } from "@mono/core";

import { TemplateStore, TemplatePresenter } from "./model";
import ListView from "./views/list.view";
import DetailView from "./views/detail.view";

@Injectable()
export class TemplateListFactory {
  constructor(
    private store: TemplateStore,
    private presenter: TemplatePresenter
  ) {}

  create() {
    return observer(() => <ListView />);
  }
}

@Injectable()
export class TemplateDetailFactory {
  constructor(
    private store: TemplateStore,
    private presenter: TemplatePresenter
  ) {}

  create() {
    return observer(() => <DetailView title="detail" />);
  }
}
