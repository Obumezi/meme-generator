import meme from "../assets/troll-face.svg"

export function Header() {
    return (
        <div className="meme-header" alt="meme face">
            <div className="left-side">
                <img src={meme} alt="meme-face" className="meme-image" />

                <h1>Meme Generator</h1>
            </div>
            <div className="right-side">
                <h1>Project 3</h1>
            </div>

        </div>

    )

}