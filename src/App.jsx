import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { countAtom, evenSelector } from './store/atoms/count';

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
    {/* <Header /> */}
    <OptimalHeaderUsingSelector />
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

function Header() {
  const count = useRecoilValue(countAtom);
  return <div>
    {
      count%2===0 ? <h1>Even</h1> : <h1>Odd</h1>
    }
  </div>
}

function OptimalHeaderUsingSelector() { //use selector when something completly depends on something
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {
      isEven ? <h1>Even</h1> : <h1>Odd</h1>
    }
  </div>
}


export default App
