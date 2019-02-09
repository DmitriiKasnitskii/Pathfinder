import * as React from 'react';
import './app.scss';
import Scene from './Components/Scene';
import LeftPanel from './Components/LeftPanel/LeftPanel';

const App = () => (
  <div className="scene">
    <LeftPanel />
    <Scene />
  </div>
);

export default App;
