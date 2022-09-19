import React from 'react';
import requests from './requests';
import './App.css';
import Row from './Row';


function App() {
  return (
    <div className="App">
      
      <h1>Netflix clone</h1>

      
     < Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
