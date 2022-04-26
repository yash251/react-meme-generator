import img from "../images/troll-face.png"

function Header() {
  return (
    <header className="header">
        <img 
            src={img} alt="troll-face" 
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Project</h4>
    </header>
  );
}
  
export default Header;