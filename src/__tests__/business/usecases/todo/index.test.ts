import { ITodo, ITodoList } from '~/business/entities';
import { interfaces, TodoUsecase } from '~/business/usecases/todo';
import { createRamdomRangeString } from '~/utils/test';

class DataAccessMock implements interfaces.IDataAccess {
  createTodo(): Promise<ITodo> {
    throw 'this class is mocking';
  }
  getTodoList(): Promise<ITodoList> {
    throw 'this class is mocking';
  }
  getTodo(): Promise<ITodo> {
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
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(await todoUsecase.createTodo(validInput)).toEqual({ todo });
  });

  it('should invaid input from title', async () => {
    dataAccessMock.createTodo = async () => todo;
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(invalidTitleInput)).rejects.toThrow();
  });

  it('should invaid input from detail', async () => {
    dataAccessMock.createTodo = async () => todo;
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(invalidDetailInput)).rejects.toThrow();
  });

  it('should data accessor faild', async () => {
    dataAccessMock.createTodo = async () => {
      throw new Error();
    };
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.createTodo(validInput)).rejects.toThrow();
  });
});

describe('Get TodoList', () => {
  let todoUsecase: TodoUsecase;
  let dataAccessMock: DataAccessMock;
  let todoList: ITodoList;

  beforeAll(() => {
    const title = createRamdomRangeString(10);
    const detail = createRamdomRangeString(100);
    const todo = { title, detail, id: '0', createdAt: new Date() };

    dataAccessMock = new DataAccessMock();
    todoList = [todo];
  });

  it('shuold get success', async () => {
    dataAccessMock.getTodoList = async () => todoList;
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(await todoUsecase.getTodoList()).toEqual({ todoList });
  });

  it('should data accessor faild', async () => {
    dataAccessMock.getTodoList = async () => {
      throw new Error();
    };
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.getTodoList()).rejects.toThrow();
  });
});

describe('Get Todo', () => {
  let todoUsecase: TodoUsecase;
  let dataAccessMock: DataAccessMock;
  let todo: ITodo;

  beforeAll(() => {
    const title = createRamdomRangeString(10);
    const detail = createRamdomRangeString(100);

    dataAccessMock = new DataAccessMock();
    todo = { title, detail, id: '0', createdAt: new Date() };
  });

  it('shuold get success', async () => {
    dataAccessMock.getTodo = async () => todo;
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(await todoUsecase.getTodo({ id: '0' })).toEqual({ todo });
  });

  it('should data accessor faild', async () => {
    dataAccessMock.getTodo = async () => {
      throw new Error();
    };
    todoUsecase = new TodoUsecase(dataAccessMock);
    expect(todoUsecase.getTodo({ id: '0' })).rejects.toThrow();
  });
});
