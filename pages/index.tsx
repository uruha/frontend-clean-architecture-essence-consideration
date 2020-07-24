import * as React from 'react';
import { useState, useContext } from 'react';
import { DIContainerContext } from '~/web/view/context';

const App: React.FC = () => {
  const { cradle } = useContext(DIContainerContext);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = async () => {
    const input = { title, detail };
    try {
      const { todo } = await cradle.createTodo(input);
      console.log(todo);

      setTitle('');
      setDetail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </li>
          <li>
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
