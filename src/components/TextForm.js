import React, { useState } from "react";
import "./TextForm.css"
export default function TextForm({ heading, showAlert }) {
  const [text, setText] = useState("");

  const handleToUppercase = (event) => {
    event.preventDefault();
    if (text === "") {
      return showAlert("primary", "Can you please provide a text.");
    }
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleToLowercase = (event) => {
    event.preventDefault();
    if (text === "") {
      return showAlert("primary", "Can you please provide a text.");
    }
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeSentence = (event) => {
    event.preventDefault();
    if (text === "") {
      return showAlert("primary", "Can you please provide a text.");
    }
    let newSentence = text.split(" ");
    for (let i = 0; i < newSentence.length; i++) {
      newSentence[i] =
        newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1);
    }
    const sentence = newSentence.join(" ");
    setText(sentence);
  };

  const wordsCounter = (text) => {
    if (!text.trim()) {
      return 0;
    }
    // remove all non-word characters
    const modifiedText = text.replace(/[^\w\s]/gi, "");
    // split the modified text on spaces
    const words = modifiedText.split(/\s+/);
    // return the number of words
    return words.length;
  };

  const handleClearSentence = (event) => {
    event.preventDefault();
    if (text === "") return;
    setText("");
    showAlert("success", "Sentence cleared.");
  };

  const handleCopy = (event) => {
    event.preventDefault();
    if (text === "") {
      return;
    }
    showAlert("success", "Text copied successfully.");
    navigator.clipboard.writeText(text);
    console.log("Copy");
  };

  const handleExtraSpace = (event) => {
    event.preventDefault();
    if (text === "") {
      return showAlert("primary", "Can you please provide a text.");
    }
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert(
      "success",
      "Unnecessary spaces removed for improved grammar and readability."
    );
  };

  async function handlePaste(event) {
    event.preventDefault();
    let newText = await navigator.clipboard.readText();
    setText(newText);
  }

  const handleOnChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  return (
    <div className="container p-3 min-vh-100 border-light">
      <div className=" d-flex justify-content-lg-between">
        <h3 htmlFor="floatingTextarea" className="fw-bold my-2">
          {heading}
        </h3>
        
        <button
          type="submit"
          className="my-1 btn btn-primary"
          onClick={handleClearSentence}
        >
          Clear
        </button>
      </div>
      <form className="mb-3">
        <textarea
          className="my-2 form-control"
          rows="5"
          cols="8"
          id="floatingTextarea"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        
        <button
          type="submit"
          className="my-1 btn btn-primary  me-3"
          onClick={handleToUppercase}
        >
          Covert To Uppercase
        </button>
        <button
          type="submit"
          className="my-1 btn btn-primary me-3"
          onClick={handleToLowercase}
        >
          Covert To Lowercase
        </button>

        <button
          type="submit"
          className="my-1 btn btn-primary me-3"
          onClick={handleCapitalizeSentence}
        >
          Capitalize Sentence
        </button>

        <button
          type="submit"
          className="my-1 btn btn-primary me-3"
          onClick={handleExtraSpace}
        >
          Extra Space
        </button>

        <button
          type="submit"
          className="my-1 btn btn-primary me-3"
          onClick={handleCopy}
        >
          Copy
        </button>

        <button
          type="submit"
          className="my-1 btn btn-primary me-3"
          onClick={handlePaste}
        >
          Paste
        </button>

        <div className="container">
          <h3>Summary of text:</h3>
          <p>
            {wordsCounter(text)} words and {text.length} character
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "Preview your text: Enter your text here"}
          </p>
        </div>
      </form>
    </div>
  );
}
