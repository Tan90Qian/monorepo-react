import { RouteConfig } from "react-router-config";

export interface RouteItem<T = any, K = string> extends RouteConfig {
  name: K;
  icon?: string;
  path: string;
  routes?: RouteItem<T, K>[];
  visiable?: boolean;
}

export type RouterConfig<T = any, K = string> = RouteItem<T, K>[];
