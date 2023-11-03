import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './Actions/actions';
import { useRoute } from './Hooks/useRoute';
import Content from './Components/Content'
import Menu from './Components/Menu'

function App() {
  const [currentRoute, navigateTo] = useRoute('#home');

  const count = useSelector((state) => state.count);
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

