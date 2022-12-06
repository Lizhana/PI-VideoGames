import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import FormTocreate from './components/FormToCreate';
import DetailsVideogame from './components/DetailsVideogame';
import User from './components/Login';
import page404 from './components/page404';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App" id='test' >
      <Switch>
        <Route exact path='/' component={User}/>
        <Route path='/welcome' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/createvideogame' component={FormTocreate} />
        <Route path= '/videogame/:id' component={DetailsVideogame}/>
        <Route path='/about' component={About} />
        <Route path='*' component={page404}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
