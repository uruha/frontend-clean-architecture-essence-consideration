import { ITodo } from '~/business/entities';
import * as interfaces from '~/business/usecases/todo/interface';
// import * as factories from '~/business/usecases/todo/factory';
import { TodoUsecase } from '~/business/usecases/todo';

import { createRamdomRangeString } from '~/utils/test';

class DataAccessMock implements interfaces.IDataAccess {
  createTodo(): Promise<ITodo> {
    throw 'this class is mocking';
  }
}

describe('Create Todo', () => {
  let todoUsecase: TodoUsecase;
  let dataAccessMock: DataAccessMock;
  let validInput: interfaces.ICreateTodoInput;
  let invalidTitleInput: interfaces.ICreateTodoInput;
  let invalidDetailInput: interfaces.ICreateTodoInput;
  let todo: ITodo;

  beforeAll(() => {
    const title = createRamdomRangeString(10);
    const invalidTitle = createRamdomRangeString(70);
    const detail = createRamdomRangeString(100);
    const invalidDetail = createRamdomRangeString(600);

    dataAccessMock = new DataAccessMock();
    validInput = { title, detail };
    invalidTitleInput = { title: invalidTitle, detail };
    invalidDetailInput = { title, detail: invalidDetail };
    todo = { title, detail, id: '0', createdAt: new Date() };
  });

  it('shuold created success', async () => {
    dataAccessMock.createTodo = async () => todo;
    // const createTodo = factories.createTodoFactory(dataAccessMock);
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(await todoUsecase.createTodo(validInput)).toEqual({ todo });
  });

  it('should invaid input from title', async () => {
    dataAccessMock.createTodo = async () => todo;
    // const createTodo = factories.createTodoFactory(dataAccessMock);
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(invalidTitleInput)).rejects.toThrow();
  });

  it('should invaid input from detail', async () => {
    dataAccessMock.createTodo = async () => todo;
    // const createTodo = factories.createTodoFactory(dataAccessMock);
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(invalidDetailInput)).rejects.toThrow();
  });

  it('should data accessor faild', async () => {
    dataAccessMock.createTodo = async () => {
      throw new Error();
    };
    // const createTodo = factories.createTodoFactory(dataAccessMock);
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(validInput)).rejects.toThrow();
  });
});
