import { createContainer, asClass, InjectionMode, Lifetime } from 'awilix';
import * as usecases from '~/business/usecases';
import { FetcherTypeAdaptor } from '~/adapters/todo';
import TodoFetcher from '~/web/api/todo';

export interface ICradle {
  todoFetcher: TodoFetcher;
  todoDataAccess: FetcherTypeAdaptor;
  todoUsecase: usecases.todo.TodoUsecase;
}

const container = createContainer<ICradle>({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  todoFetcher: asClass(TodoFetcher, { lifetime: Lifetime.SINGLETON }),
  todoDataAccess: asClass(FetcherTypeAdaptor, { lifetime: Lifetime.SINGLETON }),
  todoUsecase: asClass(usecases.todo.TodoUsecase, {
    lifetime: Lifetime.SINGLETON
  })
});

export default container;
