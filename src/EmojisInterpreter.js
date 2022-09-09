import React, { useState } from "react";
import "./styles.css"
import "./bootstrap/bootstrap.min.css"


const emojipedia = {
    "@": "ati",
    "!": "Exclamation",
    "#": "Hash",
    "$": "Dollar",
    "%": "Percentage",
    "&": "Ampersand",
    "*": "Star",
    ":": "Semicolon"
}

const emojisInLocalStore = Object.keys(emojipedia);
console.log(emojisInLocalStore)

function EmojisInterpreter() {

    let [meaning, setMeaning] = useState("Translation will happen here")

    function userInputEventHandler(e) {
        let userInput = e.target.value;
        meaning = emojipedia[userInput];
        if (meaning === undefined) {
            meaning = "We don't have this in our database";
        }
        setMeaning(meaning)
    }

    function localEmojisHandler(e) {
        let emojiSelected = e.currentTarget.innerHTML;
        console.log(emojiSelected)
        meaning = emojipedia[emojiSelected]
        setMeaning(meaning)
    }

    return (
        <>
            <div className="container d-flex justify-content-center mt-4 mb-3">
                <input
                    placeholder="Enter an emoji to get the meaning of it"
                    className="form-control"
                    onChange={userInputEventHandler} />
            </div>
            <div className="text-center">Meaning: {meaning}</div>
            <h6 className="text-center mt-4 mb-2">Emojis In Our Local Database</h6>
            <div className="container d-flex justify-content-evenly flex-row">
                {
                    emojisInLocalStore.map(item => {
                        return <span className="btn" key={item} onClick={localEmojisHandler}>{item}</span>
                    })
                }
            </div>
        </>
    )
}

export default EmojisInterpreter