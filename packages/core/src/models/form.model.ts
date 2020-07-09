import { observable, computed, action } from "mobx";
import { FieldData } from "rc-field-form/lib/interface";

export class FormStore<T extends object> {
  @observable
  initialValue?: T;

  @observable
  value?: T;

  @computed get fields() {
    return this.value
      ? Object.entries(this.value).map(([key, value]) => ({
          name: key,
          value,
        }))
      : [];
  }
}

export class FormPresenter<T extends object> {
  @action
  onChange(store: FormStore<T>, value: T) {
    store.value = value;
  }

  @action
  initial(store: FormStore<T>, value: T) {
    store.initialValue = value;
    store.value = value;
  }

  transformFieldsToValue(fields: FieldData[]) {
    const data: any = {};
    fields.forEach(({ name, value }) => {
      data[name as string] = value;
    });
    return data;
  }
}
