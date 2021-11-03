import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';

// Import page components
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/search/Search';
import Search from './pages/search/Search';

// CSS
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='./create'>
            <Create />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;