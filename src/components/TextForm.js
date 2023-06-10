import React, { useState } from "react";
import Mark from "mark.js";

export default function TextForm(props) {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "primary");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "primary");
  };
  const handleAlterClick = () => {
    let newText = "";
    for (let x of text) {
      if (x === x.toUpperCase()) {
        newText = newText + x.toLowerCase();
      } else {
        newText = newText + x.toUpperCase();
      }
      props.showAlert("Altered !", "primary");
    }

    setText(newText);
  };
  const handleClear = () => {
    setText('');
    props.showAlert("Cleared", "danger");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "primary");
  };

  const Highlight = () => {
    let obj1 = new Mark(document.querySelector("#preview"));
    obj1.unmark();

    let search = document.querySelector("#wordSearch").value;
    let obj = new Mark(document.querySelector("#preview"));
    obj.mark(search);

  };



  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{ backgroundColor: props.mode === 'dark' ? 'rgb(47 47 46)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            className="form-control"
            id="textBox"
            rows="8"
            placeholder="Enter text here !"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>
            To Uppercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleDownClick}
          >
            To Lowercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleAlterClick}
          >
            Alter
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleClear}
          >
            Clear
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleCopy}
          >
            Copy
          </button>
          <textarea
            style={{ backgroundColor: props.mode === 'dark' ? 'rgb(47 47 46)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            className="form-control"
            id="wordSearch"
            placeholder="Type to search"
            onChange={Highlight}
          ></textarea>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words{" "}
          {
            text.length
          }{" "}
          characters
        </p>
        <h1>Preview</h1>
        <p id="preview">{text === "" ? "Type something in box above" : text}</p>
      </div>
    </>
  );
}
