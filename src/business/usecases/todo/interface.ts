import { ITodo, ITodoList } from '~/business/entities';
import { IUseCase } from '~/business/usecases/interface';

/** Data Access */
export interface IDataAccess {
  createTodo(title: ITodo['title'], detail: ITodo['detail']): Promise<ITodo>;
  getTodoList(): Promise<ITodoList>;
  getTodo(id: ITodo['id']): Promise<ITodo>;
}

/** I/O */
export interface ICreateTodoInput {
  title: ITodo['title'];
  detail?: ITodo['detail'];
}
export interface IGetTodoInput {
  id: ITodo['id'];
}

export interface ICreateTodoOutput {
  todo: ITodo;
}
export interface IGetTodoListOutput {
  todoList: ITodoList;
}
export interface IGetTodoOutput {
  todo: ITodo;
}

export type ICreateTodo = IUseCase<ICreateTodoInput, ICreateTodoOutput>;
export type IGetTodoList = IUseCase<null, IGetTodoListOutput>;
export type IGetTodo = IUseCase<IGetTodoInput, IGetTodoOutput>;

export interface ITodoUsecase {
  createTodo: ICreateTodo;
  getTodoList: IGetTodoList;
  getTodo: IGetTodo;
}
