import { ComponentType } from 'react';

export abstract class BaseFactory<St> {
  protected globalStores?: St;

  receive({ globalStores }: { globalStores?: St }) {
    this.globalStores = globalStores;
    return this;
  }

  abstract create(): ComponentType;
}

export interface BaseFactoryParams<St> {
  globalStores?: St;
}
