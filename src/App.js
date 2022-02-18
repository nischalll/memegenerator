import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import "./styles.css";

function handleClick(){
  console.log("Header Clicked");
}
function App (){
    return (
      <div>
        <Header handleClick={handleClick}/>
        <Meme/>
      </div>
    );
}

export default App;
