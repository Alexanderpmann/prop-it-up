import './App.css';
import First from './components/First';
// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <h1>Components Playground - Class App</h1>
      <First firstName="Nichole" lastName="King" age="???" hairColor="Brown"/>
      <First firstName="Alexander" lastName="Mann" age="34" hairColor="Ash Brown"/>
      <First firstName="Sean" lastName="McNell" age="???" hairColor="???"/>
      <First firstName="Mendy" lastName="Giter" age="???" hairColor="???"/>
      <First firstName="Angel" lastName="Campos" age="???" hairColor="???"/>
    </div>
  );
}

export default App;
