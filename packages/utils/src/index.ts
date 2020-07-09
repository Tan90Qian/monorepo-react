export * from "./render-module-routes";

function computePath(basePath = "", currentPath = "") {
  const pathArray = basePath
    .split("/")
    .concat(currentPath.split("/"))
    .filter((path) => path);
  const pathStr = pathArray.join("/");
  if (pathStr.startsWith("/")) return pathStr;
  return `/${pathStr}`;
}

export { computePath };
