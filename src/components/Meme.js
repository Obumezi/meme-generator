import { useState } from "react"
import memeData from "../Memedata"


export function Meme() {


    const [meme, memeImage] = useState("")




    function GetMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        meme = memeImage(memesArray[randomNumber].url)


    }

    return (
        <main className="meme-form">

            <input type="text" placeholder="top text"
                className="form-input" />
            <input type="text" placeholder="bottom text"
                className="form-input" />
            <button onClick={GetMemeImage} className="form-button">Get a new meme image</button>

            <div className="image-container">
                <div className="hold">
                <img src={meme} />
                </div>
            </div>

        </main>
    )
}