import { ITodo } from '~/business/entities';
import { TodoJson, ITodoFetcher, FetcherTypeAdaptor } from '~/adapters/todo';

const fetcherMock: ITodoFetcher = {
  create: (title, string): Promise<TodoJson> => {
    throw 'this object is mocking';
  }
};

describe('Fetching type adapter test', () => {
  let adaptor: FetcherTypeAdaptor;
  let title: string;
  let detail: string;
  let fetchingData: TodoJson;
  let applicationData: ITodo;

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
  });

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
