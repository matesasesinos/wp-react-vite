import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './Actions/actions';
import { useRoute } from './Hooks/useRoute';
import Content from './Components/Content'
import Menu from './Components/Menu'

import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [currentRoute, navigateTo] = useRoute();

  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hola Router</h1>
      <Menu navigateTo={navigateTo} />
      <Content currentRoute={currentRoute} />
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
      </div>
    </>
  );
}

export default App;
