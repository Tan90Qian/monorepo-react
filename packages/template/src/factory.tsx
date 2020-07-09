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

  async didMount() {
    const data = await this.presenter.fetchList();
    this.presenter.setList(this.store, data);
  }

  create() {
    return observer((props: any) => (
      <ListView
        {...props}
        dataSource={this.store.list}
        didMount={this.didMount.bind(this)}
      />
    ));
  }
}

@Injectable()
export class TemplateDetailFactory {
  constructor(
    private store: FormStore<IModel>,
    private presenter: TemplatePresenter,
    private formPresenter: FormPresenter<IModel>
  ) {}

  async didMount() {
    const data = await this.presenter.fetchDetail();
    this.formPresenter.initial(this.store, data);
  }

  create() {
    return observer((props: any) => (
      <DetailView
        {...props}
        title="detail"
        dataSource={this.store.value}
        didMount={this.didMount.bind(this)}
      />
    ));
  }
}

@Injectable()
export class TemplateFormFactory {
  constructor(
    private store: FormStore<IModel>,
    private presenter: TemplatePresenter,
    private formPresenter: FormPresenter<IModel>
  ) {}

  async didMount() {
    const data = await this.presenter.fetchDetail();
    this.formPresenter.initial(this.store, data);
  }

  onChange(changedFields: FieldData[], allFields: FieldData[]) {
    const value = this.formPresenter.transformFieldsToValue(allFields);
    this.formPresenter.onChange(this.store, value);
  }

  create() {
    return observer((props: any) => (
      <FormView
        {...props}
        fields={this.store.fields}
        onChange={this.onChange.bind(this)}
        didMount={this.didMount.bind(this)}
      />
    ));
  }
}
