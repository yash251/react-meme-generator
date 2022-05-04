import { useState, useEffect } from "react";
// import memesData from "../memesData";

function Meme() {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    // useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data.data.memes)
    // }, [])

    function getMemeImage() {
        // const allMemes = allMemes.data.memes;
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value
        }))
    } 

    // const result = React.useState("Yes")
    // console.log(result)
    // output = ["Yes", ƒ()]

    // const [isImportant, func] = React.useState("Yes")
    // console.log(isImportant)
    // output = "Yes"
    // Note: if you ever need the old value of state
    // to help you determine the new value of state,
    // you should pass a callback function to your
    // state setter function instead of using
    // state directly. This callback function will
    // receive the old value of state as its parameter,
    // which you can then use to determine your new
    // value of state.

    // useEffect takes a function as its parameter. If that function
    // returns something, it needs to be a cleanup function. Otherwise,
    // it should return nothing. If we make it an async function, it
    // automatically retuns a promise instead of a function or nothing.
    // Therefore, if you want to use async operations inside of useEffect,
    // you need to define the function separately inside of the callback
    // function

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
  }
    
  export default Meme;