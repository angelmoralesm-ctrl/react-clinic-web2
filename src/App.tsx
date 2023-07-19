import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import Carousel_ from './components/carousel';
import Formulario from './components/form';
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <body>
        <div className="container">
          <Carousel_/>
        </div>
        <div>
          <Formulario/>
        </div>
      </body>
    </React.Fragment>
  );
}

export default App;