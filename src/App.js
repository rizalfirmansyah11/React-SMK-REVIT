import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Nav />
      <Switch>
        <Route path = '/' component= {Home} exact/>
        <Route path = '/kontak' component= {Kontak} />
        <Route path = '/sejarah' component= {Sejarah} />
        <Route path = '/tentang' component= {Tentang} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
