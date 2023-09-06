// import logo from './logo.svg';

import Banner from './Banner';
import './App.css';
import Rows from "./Rows";
import requests from './requests';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
