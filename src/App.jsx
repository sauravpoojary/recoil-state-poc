import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { countAtom } from './store/atoms/count';

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom); // i just need the value

  return <div>{count}</div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom); //if u need both
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease</button>
  </div>
}

export default App
