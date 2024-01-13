import logo from './logo.svg';
import './App.css';
import {Greeting,Mycomponent} from './Greeting';
import MyHookComponent from './HookExample';


const GreetingWrapper = Greeting(Mycomponent)
function App() {
  return (
    <div className="App">
      <MyHookComponent></MyHookComponent>
        {/* <GreetingWrapper name="Sanjeet kumar" /> */}
    </div>
  );
}

export default App;

