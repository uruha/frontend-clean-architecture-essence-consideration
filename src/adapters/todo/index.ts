import * as entities from '~/business/entities';
import * as usecase from '~/business/usecases/todo';

export type FetchedTodo = {
  id: number;
  title: string;
  detail?: string;
  createdAt: Date;
};

export type FetchedTodoList = FetchedTodo[];

export interface ITodoFetcher {
  create(title: string, detail?: string): Promise<FetchedTodo>;
  getAll(): Promise<FetchedTodoList>;
  get(id: number): Promise<FetchedTodo>;
}

export class FetcherTypeAdaptor implements usecase.interfaces.IDataAccess {
  private readonly todoFetcher: ITodoFetcher;

  constructor(todoFetcher: ITodoFetcher) {
    this.todoFetcher = todoFetcher;
  }

  async createTodo(
    title: entities.ITodo['title'],
    detail: entities.ITodo['detail']
  ): Promise<entities.ITodo> {
    const res = await this.todoFetcher.create(title, detail);

    // convert fetching data to application data
    const todo = {
      id: res.id.toString(),
      title: res.title,
      detail: res.detail,
      createdAt: res.createdAt
    };
    return todo;
  }

  async getTodoList(): Promise<entities.ITodoList> {
    const res = await this.todoFetcher.getAll();

    const todoList = res.reverse().map(todo => {
      return {
        id: todo.id.toString(),
        title: todo.title,
        detail: todo.detail,
        createdAt: todo.createdAt
      };
    });

    return todoList;
  }

  async getTodo(id: entities.ITodo['id']): Promise<entities.ITodo> {
    const res = await this.todoFetcher.get(Number(id));

    const todo = {
      id: res.id.toString(),
      title: res.title,
      detail: res.detail,
      createdAt: res.createdAt
    };

    return todo;
  }
}
