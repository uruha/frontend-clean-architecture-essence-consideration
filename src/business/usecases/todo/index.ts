import { isTitleTextValid, isDetailTextValid } from '~/business/entities';
import * as interfaces from '~/business/usecases/todo/interface';

class TodoUsecase implements interfaces.ITodoUsecase {
  private readonly dataAccess: interfaces.IDataAccess;

  constructor(dataAccess: interfaces.IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async createTodo(
    input: interfaces.ICreateTodoInput
  ): Promise<interfaces.ICreateTodoOutput> {
    if (!isTitleTextValid(input.title)) {
      throw new Error();
    }

    if (!isDetailTextValid(input.detail)) {
      throw new Error();
    }

    try {
      const todo = await this.dataAccess.createTodo(input.title, input.detail);
      return { todo };
    } catch (cause) {
      throw new Error(cause);
    }
  }
}

export { interfaces, TodoUsecase };
