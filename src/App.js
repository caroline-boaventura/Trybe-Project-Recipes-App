import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login, Foods, Drinks } from './components';

function App() {
  useEffect(() => {
    const user = { email: '' };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(user));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/comidas" component={ Foods } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
    // <h1>Teste</h1>
  );
}

export default App;
