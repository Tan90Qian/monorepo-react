import { useCallback } from "react";
import { History } from "history";

import { computePath } from "@mono/utils";

interface useGoEditParmas {
  path: string;
  history: History;
}

export function useGoEdit(params: useGoEditParmas) {
  const { path, history } = params;
  return useCallback(
    (id: number | string) => {
      history.push(computePath(path, `${id}/edit`));
    },
    [path, history]
  );
}

export function useGoDetail(params: useGoEditParmas) {
  const { path, history } = params;
  return useCallback(
    (id: number | string) => {
      history.push(computePath(path, `${id}/detail`));
    },
    [path, history]
  );
}
