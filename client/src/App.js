import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import FormTocreate from './components/FormToCreate';
import DetailsVideogame from './components/DetailsVideogame';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route  exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/crearvideogame' component={FormTocreate} />
        <Route path= '/videogame/:id' component={DetailsVideogame}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
