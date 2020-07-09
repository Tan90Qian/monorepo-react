import { computePath, ModuleRoute } from "@mono/utils";

import { TemplateDetailFactory, TemplateListFactory, TemplateFormFactory } from "./factory";
import { Factory } from "@mono/core";

function routes(props: ModuleRoute): ModuleRoute[] {
  const path = props.path as string;
  return [
    {
      path: computePath(path),
      exact: true,
      component: Factory(TemplateListFactory).create(),
    },
    {
      path: computePath(path, ":id/deail"),
      component: Factory(TemplateDetailFactory).create(),
    },
    {
      path: computePath(path, ":id/edit"),
      component: Factory(TemplateFormFactory).create(),
    },
  ];
}
export default routes;
