import { computePath, ModuleRoute } from "@mono/utils";

import { TemplateDetailFactory, TemplateListFactory } from "./factory";
import { Factory } from "@mono/core";

function routes(props: ModuleRoute): ModuleRoute[] {
  const path = props.path as string;
  return [
    {
      path: computePath(path),
      component: Factory(TemplateListFactory).create(),
    },
    {
      path: computePath(path, ":id"),
      mode: "modal",
      component: Factory(TemplateDetailFactory).create(),
    },
  ];
}
export default routes;
