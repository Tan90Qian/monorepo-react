import React from "react";
import { observer } from "mobx-react";
import { FieldData } from "rc-field-form/lib/interface";
import { Injectable, FormStore, FormPresenter } from "@mono/core";

import { TemplateStore, TemplatePresenter } from "./model";
import { IModel } from "./interface";
import ListView from "./views/list.view";
import DetailView from "./views/detail.view";
import FormView from "./views/form.view";

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

@Injectable()
export class TemplateFormFactory {
  constructor(
    private store: FormStore<IModel>,
    private presenter: FormPresenter<IModel>
  ) {}

  onChange(changedFields: FieldData[], allFields: FieldData[]) {
    this.presenter.onChange(
      this.store,
      this.presenter.transformFieldsToValue(allFields)
    );
  }

  create() {
    return observer(() => (
      <FormView
        fields={this.store.fields}
        onChange={this.onChange.bind(this)}
      />
    ));
  }
}
