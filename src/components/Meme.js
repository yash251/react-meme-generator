import memesData from "../memesData";

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(randomNumber)
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

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    );
  }
    
  export default Meme;