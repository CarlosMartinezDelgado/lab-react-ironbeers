
import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import DetailsBeer from './pages/DetailsBeer';

import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/beers/:id" element={<DetailsBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>

      </Routes>
     
    
    </div>
  );
}

export default App;
