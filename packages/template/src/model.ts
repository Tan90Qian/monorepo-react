import { observable, action } from "mobx";
import { IStore, IPresenter, IModel } from "./interface";
import { Injectable } from "@pcr/core";
import TemplateService from "./service";

export class TemplateStore implements IStore {
  @observable list?: IModel[];

  @observable detail?: IModel;
}

@Injectable()
export class TemplatePresenter implements IPresenter {
  constructor(private service: TemplateService) {}

  fetchList() {
    return this.service.fetchRecipes();
  }

  fetchDetail(id: string) {
    return this.service.fetchDetail(id);
  }

  addRecipe(value: IModel) {
    return this.service.addRecipe(value);
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
