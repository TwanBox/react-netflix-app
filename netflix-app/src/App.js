import React from 'react';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Banner />
      <Row 
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Populair op Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Veelgeprezen Schrijvers" fetchUrl={requests.fetchTopRated} />
      <Row title="Actie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantische films" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
