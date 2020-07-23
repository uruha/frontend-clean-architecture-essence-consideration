import * as entities from '~/business/entities';
import * as usecase from '~/business/usecases/todo';

export type TodoJson = {
  id: number;
  title: string;
  detail?: string;
  createdAt: Date;
};

export interface ITodoFetcher {
  create(title: string, detail?: string): Promise<TodoJson>;
}

export class FetcherTypeAdaptor implements usecase.interfaces.IDataAccess {
  private readonly fetcher: ITodoFetcher;

  constructor(fetcher: ITodoFetcher) {
    this.fetcher = fetcher;
  }

  async createTodo(
    title: entities.ITodo['title'],
    detail: entities.ITodo['detail']
  ): Promise<entities.ITodo> {
    const res = await this.fetcher.create(title, detail);

    // convert fetching data to application data
    const todo = {
      id: res.id.toString(),
      title: res.title,
      detail: res.detail,
      createdAt: res.createdAt
    };
    return todo;
  }
}
