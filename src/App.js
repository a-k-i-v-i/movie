import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Popular from './components/popular/Popular';
import TopRated from './components/topRated/TopRated';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Popular/>}/>
        <Route path='/topRated' element={<TopRated/>}/>
      </Routes>
    </div>
  );
}

export default App;
