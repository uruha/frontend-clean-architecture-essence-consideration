import { isTitleTextValid, isDetailTextValid } from '~/business/entities';
import * as interfaces from '~/business/usecases/todo/interface';

class TodoUsecase implements interfaces.ITodoUsecase {
  private readonly todoDataAccess: interfaces.IDataAccess;

  constructor(todoDataAccess: interfaces.IDataAccess) {
    this.todoDataAccess = todoDataAccess;
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
      const todo = await this.todoDataAccess.createTodo(
        input.title,
        input.detail
      );
      return { todo };
    } catch (cause) {
      throw new Error(cause);
    }
  }
}

export { interfaces, TodoUsecase };
