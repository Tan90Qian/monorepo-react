import { observable } from "mobx";
import { IStore, IPresenter } from "./interface";
import { Injectable } from "@mono/core";
import TemplateService from "./service";

export class TemplateStore implements IStore {
  @observable name?: string;
}

@Injectable()
export class TemplatePresenter implements IPresenter {
  constructor(private service: TemplateService) {}
}
