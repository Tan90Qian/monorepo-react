export interface IStore {}

export interface IPresenter {}

export interface IService {}

export interface IModel {
  id: string;
  title: string;
  description?: string;
  creationDate?: string;
  ingredients?: string[];
}
