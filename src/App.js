import { Route,Routes } from 'react-router-dom';
import './App.css';
//import Navigation from './components/Navigation'
import Resources from './components/Resources';
import Home from  './components/Home'
import Ivestors from './components/Ivestors';
import Founders from './components/Founders';
import {lazy, Suspense} from 'react';
import PrivateResources from './components/PrivateResources';

const Navigation = lazy(()=>import('../src/components/Navigation'))

function App() {
  return (
    <>
      {/* <Suspense>
      <Navigation/>
      </Suspense>
       <div>
       <Routes>
        <Route path='/Resources' element={<Resources/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Ivestors' element={<Ivestors/>}/>
        <Route path='/Founders' element={<Founders/>}/>
        <Route path='/Resources/private-market' element={<PrivateResources/>} />
       </Routes>
       </div> */}
    </>
  );
}

export default App;
