import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AlbumFeature from './features';
import ColorBox from './components/ColorBox';
import Count from './components/Count';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';

function App() {



  return (
    <div className="App">
      {/* <AlbumFeature />
      <ColorBox />
      <Count /> */}
      <TodoFeature />
    </div>
  );
}

export default App;
