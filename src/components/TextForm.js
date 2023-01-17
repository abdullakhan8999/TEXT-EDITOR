import React, { useState } from "react";
import "./TextForm.css";
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
      <div className="d-flex row align-items-center justify-content-between">
        <div className="col-8">
          <h3 htmlFor="floatingTextarea" className="fw-bold my-2">
            {heading}
          </h3>
        </div>
        <div className="col-4 d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="submit"
            className="btn"
            // style={{
            //   "max-height": "50px",
            // }}
            onClick={handlePaste}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1834/1834036.png"
              style={{ "max-height": "2rem" }}
              alt="Paste"
            />
          </button>
          <button
            type="submit"
            className="btn"
            // style={{
            //   "max-height": "50px",
            // }}
            onClick={handleCopy}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3867/3867474.png"
              style={{ "max-height": "2rem" }}
              alt="Copy"
            />
          </button>
          <button
            type="submit"
            className="btn"
            // style={{
            //   "max-height": "50px",
            // }}
            onClick={handleClearSentence}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1276/1276453.png"
              style={{ "max-height": "2rem" }}
              alt="Clear"
            />
          </button>
        </div>
      </div>
      <form className="my-3">
        <textarea
          className="my-2 form-control"
          rows="5"
          cols="8"
          id="floatingTextarea"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <div className="row my-3">
          <div class="d-grid gap-2 col-6 mx-auto">
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
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
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
          </div>
        </div>
        <div className="container">
          <h3>Summary of text:</h3>
          <p>
            {
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length
            }
            words and {text.length} character
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
