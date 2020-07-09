import { observable, action } from "mobx";
import { IStore, IPresenter, IModel } from "./interface";
import { Injectable } from "@mono/core";
import TemplateService from "./service";

export class TemplateStore implements IStore {
  @observable list?: IModel[];

  @observable detail?: IModel;
}

@Injectable()
export class TemplatePresenter implements IPresenter {
  constructor(private service: TemplateService) {}

  fetchList() {
    return this.service.fetchList();
  }

  fetchDetail() {
    return this.service.fetchDetail();
  }

  @action
  setList(store: TemplateStore, value: IModel[]) {
    store.list = value;
  }

  @action
  setDetail(store: TemplateStore, value: IModel) {
    store.detail = value;
  }
}
