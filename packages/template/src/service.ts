import { IService } from "./interface";
import { Injectable } from "@mono/core";

@Injectable()
export default class TemplateService implements IService {
  constructor(private engine: any) {}
}
