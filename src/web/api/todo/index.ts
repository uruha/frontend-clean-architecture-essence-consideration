import { ITodoFetcher, FetchedTodo, FetchedTodoList } from '~/adapters/todo';

export default class TodoFetcher implements ITodoFetcher {
  async create(title: string, detail: string): Promise<FetchedTodo> {
    const res = await fetch(
      'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo',
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          title,
          detail
        })
      }
    );

    return res.json();
  }

  async getAll(): Promise<FetchedTodoList> {
    const res = await fetch(
      'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo'
    );

    return res.json();
  }

  async get(id: number): Promise<FetchedTodo> {
    const res = await fetch(
      `https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo/${id}`
    );

    return res.json();
  }
}
