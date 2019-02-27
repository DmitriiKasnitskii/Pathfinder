import * as React from 'react';
import Scene from './Components/Scene';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import Header from './Components/Header/Header';
import './app.scss';

function App() {
  return (
    <div className="scene">
      <Header />
      <LeftPanel />
      <Scene />
    </div>
  );
}

export default App;
