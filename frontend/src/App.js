import React, { useState, useEffect, Fragment } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CanvasMenu from './components/layout/CanvasMenu';
import { PreLoader } from './components/layout/PreLoader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);

  return (
    <div className="App">
      {
        loading ? ( <PreLoader />  ): (
        <Fragment>
          <CanvasMenu /> 
          <Header />
          <Footer />
        </Fragment>
        )
      }
    </div>
  );
}

export default App;
