import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className='flex items-center justify-center flex-col	'>
      <h1 className="text-3xl m-4">Count Down Timer</h1>
      <Timer />
    </div>
  )
}

export default App;
