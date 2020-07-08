import { IService } from "./interface";

export default class TemplateService implements IService {
  constructor(private engine: any) {}
}
