import React from "react";
import memesData from "../memeData.js";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  
  console.log(meme);
  function handleChange(e) {
    setMeme((prevMeme) => {
      return { ...prevMeme, [e.target.name]: e.target.value };
    });
    // console.log(e.target.value);
  }
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(meme.randomImage);
    // console.log("clicked");
  }
  return (
    <main>
      <div action="" className="form">
        <input
          name="topText"
          type="text"
          placeholder="Top Text"
          className="form-input"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          className="form-input"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <div className="top-text">{meme.topText}</div>
        <img src={meme.randomImage} alt="Meme Image" />
        <div className="bottom-text">{meme.bottomText}</div>
      </div>
    </main>
  );
}

export default Meme;
