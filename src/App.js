import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<section className="sections"> <Home /> </section>}/>
            <Route path="AboutMe" element={<section className="sections"><AboutMe /></section>}/>
            <Route path="Services" element={<section className="sections"> <Services /></section>}/>
            <Route path="Portfolio" element={<section className="sections"> <Portfolio /> </section>}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

