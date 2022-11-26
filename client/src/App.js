import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route  exact path='/' component={LandingPage}/>
        <Route path='/home' component={Search} />
      <h1>Henry</h1>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
