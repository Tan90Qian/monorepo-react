import { computePath, ModuleRoute } from "@pcr/utils";

import {
  TemplateDetailFactory,
  TemplateListFactory,
  TemplateFormFactory,
} from "./factory";
import { Factory } from "@pcr/core";

const TemplateList = Factory(TemplateListFactory).create();
const TemplateDetail = Factory(TemplateDetailFactory).create();
const TemplateForm = Factory(TemplateFormFactory).create();

function routes(props: ModuleRoute): ModuleRoute[] {
  const path = props.path as string;
  return [
    {
      path: computePath(path),
      exact: true,
      component: TemplateList,
    },
    {
      path: computePath(path, "add"),
      component: TemplateForm,
    },
    {
      path: computePath(path, ":id/detail"),
      component: TemplateDetail,
    },
    {
      path: computePath(path, ":id/edit"),
      component: TemplateForm,
    },
  ];
}
export default routes;
