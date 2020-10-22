import React from 'react';
import { List } from './containers/List'
import { Movie } from './components/Movie'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <BrowserRouter>
            <Route exact path="/" component={List}/>
              {/* <List />
            </Route> */}

            <Route path="/movie/:id" component={Movie}/>

          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
