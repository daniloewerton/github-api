import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import FindAccount from 'pages/FindAccount';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <FindAccount />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
