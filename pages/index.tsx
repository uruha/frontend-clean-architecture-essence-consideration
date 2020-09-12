import * as React from 'react';
import { useState, useContext } from 'react';
import { DIContainerContext } from '~/web/view/context';

import { ITodo, ITodoList } from '~/business/entities';

type ItemProps = {
  todo: ITodo;
};

const Item: React.FC<ItemProps> = ({ todo }) => {
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.detail}</p>
      <time>{todo.createdAt}</time>
    </li>
  );
};

const App: React.FC = () => {
  const { todoUsecase } = useContext(DIContainerContext).cradle;
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [list, setTodoList] = useState<ITodoList>([]);

  const handleGetTodoList = async () => {
    try {
      const { todoList } = await todoUsecase.getTodoList();
      setTodoList(todoList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const input = { title, detail };
    try {
      const { todo } = await todoUsecase.createTodo(input);
      console.log(todo);

      setTitle('');
      setDetail('');
      handleGetTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetTodoList();
  }, []);

  return (
    <>
      <h1>Todo application</h1>
      <div>
        <ul>
          <li>
            Todo title:
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </li>
          <li>
            Todo detail:
            <input
              type="text"
              value={detail}
              onChange={e => setDetail(e.target.value)}
            />
          </li>
        </ul>
        <div>
          <button
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <ul>
          {list.length ? (
            list.reverse().map(todo => <Item key={todo.id} todo={todo} />)
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default App;
