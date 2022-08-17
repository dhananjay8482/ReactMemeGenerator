
import React, { useState } from "react";
// import memesData from "../memesData"

export default function Meme(){

    // const [memeUrl, setMemeUrl] = useState("")

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages,setAllMemeImages] = React.useState([])

    // FETCHING DATA FROM API
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json() )
        .then( data => setAllMemeImages(data.data.memes) )
    },[])


//  OR using asnc
/*
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    */

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState=>({
            ...prevState,
            [name] : value
        }))
    }


    function getMemeImg(){
        const randomNumber = Math.floor(Math.random()*allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMeme(
            prevState => ({
                ...prevState,
                topText:"",
                bottomText:"",
                randomImage:url
            })
        )

    }

    return(
        <main>
            <div className="form">
                <input type="text" 
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input type="text" 
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImg}
                >Get a new meme image 🖼</button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText} </h2>    
                <h2 className="meme--text bottom">{meme.bottomText}</h2>    
            </div>
        </main>
    )
}