import trollFace from "../assets/troll-face.png";
export default function Header(){
    return(
        <header className="header" >
            <img src={trollFace} alt="" className="header--image" />
            <h3 className="header--title" >Meme Generator</h3>
            <h4 className="header--subTitle" >React Project</h4>
        </header>
    )
}