import React from 'react';
import "./App.css";
import Topbar from './Topbar';
import Filter from './Filter';
import Cards from './Cards';
import Footer from './Footer';
import {cardData} from './Common';

function App() {
  return (
    <div className="App">
      <div className="insideApp">
    <Topbar />
      <div className="contents">
        <Filter />
        <div className="cardGrid">      
            {cardData.map((item) => <Cards cardImage={item.cardImage} title={item.title} author={item.author} date={item.date} desc={item.desc}/>)}
        </div>
      </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
