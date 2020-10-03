import { ITodo } from '~/business/entities';
import {
  FetchedTodo,
  ITodoFetcher,
  FetcherTypeAdaptor,
  FetchedTodoList
} from '~/adapters/todo';

const fetcherMock: ITodoFetcher = {
  create: (): Promise<FetchedTodo> => {
    throw 'this object is mocking';
  },
  getAll: (): Promise<FetchedTodoList> => {
    throw 'this object is mocking';
  },
  get: (): Promise<FetchedTodo> => {
    throw 'this object is mocking';
  }
};

describe('Fetching type adapter test', () => {
  let adaptor: FetcherTypeAdaptor;
  let title: string;
  let detail: string;
  let fetchingData: FetchedTodo;
  let fetchingData02: FetchedTodo;
  let applicationData: ITodo;
  let applicationData02: ITodo;

  beforeAll(() => {
    adaptor = new FetcherTypeAdaptor(fetcherMock);
    title = 'test title';
    detail = 'test title';
    const createdAt = new Date();
    fetchingData = {
      id: 0,
      title,
      detail,
      createdAt
    };
    applicationData = {
      id: '0',
      title,
      detail,
      createdAt
    };
    fetchingData02 = {
      id: 1,
      title,
      detail,
      createdAt
    };
    applicationData02 = {
      id: '1',
      title,
      detail,
      createdAt
    };
  });

  describe('[Create] method testing', () => {
    it('should convert fetching data to application data', async () => {
      fetcherMock.create = async () => fetchingData;
      expect(await adaptor.createTodo(title, detail)).toEqual(applicationData);
    });

    it('should fetching faild', async () => {
      fetcherMock.create = async () => {
        throw new Error('fetching faild');
      };
      expect(adaptor.createTodo(title, detail)).rejects.toThrow();
    });
  });

  describe('[Get All] method testing', () => {
    it('should convert fetching data to application data', async () => {
      fetcherMock.getAll = async () => [fetchingData, fetchingData02];
      expect(await adaptor.getTodoList()).toEqual([
        applicationData02,
        applicationData
      ]);
    });

    it('should fetching faild', async () => {
      fetcherMock.getAll = async () => {
        throw new Error('fetching faild');
      };
      expect(adaptor.getTodoList()).rejects.toThrow();
    });
  });

  describe('[Get] method testing', () => {
    it('should convert fetching data to application data', async () => {
      fetcherMock.get = async () => fetchingData;
      expect(await adaptor.getTodo('0')).toEqual(applicationData);
    });

    it('should fetching faild', async () => {
      fetcherMock.get = async () => {
        throw new Error('fetching faild');
      };
      expect(adaptor.getTodo('0')).rejects.toThrow();
    });
  });
});
