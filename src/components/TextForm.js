import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("upper case clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
      };
    
      const handleLowClick = () => {
        // console.log("upper case clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
      };
    
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
      };
    
      const handleClear = () => {
        // console.log("upper case clicked");
        // let newText = text.
        setText("");
        props.showAlert("Clear", "success");
      };
    
      const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
      };
    
      const handlCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard", "success");
      };
    
      const [text, setText] = useState("");
    
  return (
    <>
    <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3A3B3C" }}
      >
        <div className="mb-3">
          <h3> {props.heading}</h3>

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#3A3B3C" : "white",
              color: props.mode === "dark" ? "white" : "#3A3B3C"
            }}
            id="myBox"
            rows="10"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Convert to Lower Case
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
            Extra Spaces Removed
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>


      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#3A3B3C" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Nothing to preview!"}</p>
      </div>
    </>
  )
}
