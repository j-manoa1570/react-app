import React from 'react';
import './App.css';
import './head.css';
import Top from './top';
import Page from './page';
import Bottom from './bottom';

function App() {

  var pagestate = "home";

  return (
    <html>
      <Top />
      <Page value={pagestate}/>
      <Bottom />
    </html>
  );
}



export default App;
