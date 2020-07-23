import { isTitleTextValid, isDetailTextValid } from '~/business/entities';
import { ICreateTodoFactory } from '~/business/usecases/todo/interface';

export const createTodoFactory: ICreateTodoFactory = dataAccess => {
  return async function createTodo(input) {
    if (!isTitleTextValid(input.title)) {
      throw new Error();
    }

    if (!isDetailTextValid(input.detail)) {
      throw new Error();
    }

    try {
      const todo = await dataAccess.createTodo(input.title, input.detail);
      return { todo };
    } catch (cause) {
      throw new Error(cause);
    }
  };
};
