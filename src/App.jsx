import { useState } from 'react';

import './todolist.scss';
let TMTodoList = () => {
  let [todo, setTodo] = useState('');
  let [time, setTime] = useState('');
  let [finish, setFinish] = useState([]);
  let [count, setcount] = useState(1);
  let newFinish = finish;
  console.log('top,', finish);

  console.log(time);

  let submit = (e) => {
    e.preventDefault();
    setcount(count + 1);
    setFinish([...finish, { id: count, todo, time }]);

    setTime('');
    setTodo('');
  };
<<<<<<< HEAD
  let remove = (theid) => setFinish((xx) => xx.filter((x) => x.id !== theid));
  let add = (theid) => setFinish((xx) => xx.filter((x) => x.id === theid));
=======
  const deleted = (index) => {
    let prev = [...finish];
    prev.splice(index, 1);
    setFinish(prev);
  };

>>>>>>> aade6029250f4437f6864661a8e6f3a66518ae4b
  let changeTodo = (e) => {
    setTodo(e.target.value);
  };
  let changeTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <div className='container'>
        <h1>Mush's todo List</h1>
        <form action='' onSubmit={submit} className='form'>
          <div className='time'>
            <label htmlFor='time'>what to do</label>
            <input
              type='text'
              name='todo'
              id='task'
              value={todo}
              required
              onChange={changeTodo}
            />
          </div>
          <div className='time'>
            <label htmlFor='time'>what time</label>
            <input
              type='time'
              name='time'
              id='time'
              value={time}
              required
              onChange={changeTime}
            />
          </div>
          <button type='submit'> sumbit</button>
        </form>
        <div className='todolist'>
          <h2 className='td'>To do list</h2>
          <h2>Time</h2>
        </div>
<<<<<<< HEAD
        {newFinish.map(({ id, todo, time }) => {
          console.log(finish, newFinish);
=======
        {finish.map(({ todo, time }, index) => {
>>>>>>> aade6029250f4437f6864661a8e6f3a66518ae4b
          return (
            <div key={index} className='todo-list'>
              <h4 className='h4-todo'>
                {index + 1}. {todo}
              </h4>
              <h4>{time}</h4>
<<<<<<< HEAD
              <button onClick={() => remove(id)}>&#x2715;</button>
              <button onClick={() => add(id)}>&#x2715;</button>
=======
              <button onClick={deleted}>&#x2715;</button>
>>>>>>> aade6029250f4437f6864661a8e6f3a66518ae4b
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TMTodoList;
