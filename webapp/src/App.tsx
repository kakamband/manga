import React from 'react';
import Home from './components/home';
import MangaList from './components/mangaList';
import MangaChapter from './components/mangaChapter';
import MangaChapterList from './components/mangaChapterList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App">
        {/* <Home /> */}
        {/* <MangaList /> */}
        {/* <MangaChapter /> */}
        <MangaChapterList />
      </div>
    </div>
  );
}

export default App;
