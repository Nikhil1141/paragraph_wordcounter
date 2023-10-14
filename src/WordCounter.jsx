import React, { useState } from "react";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        width: "100%",
        height: "200px",
    },
};
function WordCounter() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
    };

    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    return (
        <div>
            <textarea
                style={styles.textarea}
                placeholder="Type here..."
                value={text}
                onChange={handleTextChange}
            />
            <p>Word Count: {countWords(text)}</p>
        </div>
    );
}

export default WordCounter;
