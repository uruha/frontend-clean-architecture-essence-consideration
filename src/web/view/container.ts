import {
  createContainer,
  asClass,
  InjectionMode,
  asFunction,
  Lifetime
} from 'awilix';
import * as usecases from '~/business/usecases';
import { FetcherTypeAdaptor } from '~/adapters/todo';
import TodoFetcher from '~/web/api/todo';

export interface ICradle {
  fetcher: TodoFetcher;
  dataAccess: FetcherTypeAdaptor;
  createTodo: usecases.todo.interfaces.ICreateTodo;
}

const container = createContainer<ICradle>({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  fetcher: asClass(TodoFetcher, { lifetime: Lifetime.SINGLETON }),
  dataAccess: asClass(FetcherTypeAdaptor, { lifetime: Lifetime.SINGLETON }),
  createTodo: asFunction(usecases.todo.factories.createTodoFactory)
});

export default container;
