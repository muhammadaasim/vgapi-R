import './App.css';
import React from 'react';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SingleGame from './pages/SingleGame';

import { BrowserRouter, Route, Switch, Link}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gray-900 text-white">
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Link>
            <Route exact path="/" component={Main} />
            <Route path="/singlegame/:id" component={SingleGame} />
          </Link>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
