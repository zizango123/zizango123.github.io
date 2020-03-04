import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './common/navbar.js';
import Footer from './common/footer.js';
import Banner from './common/banner.js';

function App() {
  return (
    <div style={{flex: 1}}>
    <Menubar />
    <Banner />
    <Footer />
    </div>
  );
}

export default App;
