import { createContainer, asClass, InjectionMode, Lifetime } from 'awilix';
import * as usecases from '~/business/usecases';
import { FetcherTypeAdaptor } from '~/adapters/todo';
import TodoFetcher from '~/web/api/todo';

export interface ICradle {
  fetcher: TodoFetcher;
  dataAccess: FetcherTypeAdaptor;
  todoUsecase: usecases.todo.TodoUsecase;
}

const container = createContainer<ICradle>({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  fetcher: asClass(TodoFetcher, { lifetime: Lifetime.SINGLETON }),
  dataAccess: asClass(FetcherTypeAdaptor, { lifetime: Lifetime.SINGLETON }),
  todoUsecase: asClass(usecases.todo.TodoUsecase)
});

export default container;
