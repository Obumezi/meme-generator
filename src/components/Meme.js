import {useState} from "react"


export function Meme() {
   const [ count, setCount] = useState("Hello")
   console.log(count)

    return (
        <main className="meme-form">

            <input type="text" placeholder="top text"
                className="form-input" />
            <input type="text" placeholder="bottom text"
                className="form-input" />
            <button className="form-button">Get a new meme image</button>



        </main>
    )
}