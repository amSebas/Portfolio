import { useState } from 'react';

import '../styles/App.css';
import Home from './Home';
import AboutMe from './AboutMe'
import Services from './Services'
import Portfolio from './Portfolio'


function App() {
  const [sections , setSection] = useState('home') 

  return (
    <div className="App">
      <main>
        <nav>
          <div className="navigation-sections">

          </div>
        </nav>
        <section className="sections">
          
        </section>
      </main>
    </div>
  );
}

export default App;
