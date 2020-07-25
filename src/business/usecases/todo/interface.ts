import { ITodo } from '~/business/entities';
import { IUseCase } from '~/business/usecases/interface';

/** Data Access */
export interface IDataAccess {
  createTodo(title: ITodo['title'], detail: ITodo['detail']): Promise<ITodo>;
}

/** I/O */
export interface ICreateTodoInput {
  title: ITodo['title'];
  detail?: ITodo['detail'];
}

export interface ICreateTodoOutput {
  todo: ITodo;
}

export type ICreateTodo = IUseCase<ICreateTodoInput, ICreateTodoOutput>;

export interface ITodoUsecase {
  createTodo: ICreateTodo;
}
