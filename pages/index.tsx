import * as React from 'react';
import { useState, useContext } from 'react';
import { DIContainerContext } from '~/web/view/context';

const App: React.FC = () => {
  const { createTodo } = useContext(DIContainerContext).cradle;
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = async () => {
    const input = { title, detail };
    try {
      const { todo } = await createTodo(input);
      console.log(todo);

      setTitle('');
      setDetail('');
    } catch (error) {
      console.log(error);
    }
  };

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
    </>
  );
};

export default App;
