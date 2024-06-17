import React from "react";
import { useState } from "react";


export default function TextForm(props){
    const [Text, setText] = useState(String);
    function HandleOnChange(event){
        setText(event.target.value);
    };
    function ConvertToUpperCase(){
        setText(Text.toUpperCase());
        props.ShowAlert('Converted To UpperCase', 'success');
    };
    function ConvertToLowerCase(){
        setText(Text.toLowerCase());
        props.ShowAlert('Converted To LowerCase', 'success');
    };
    function ClearingText(){
        setText('');
        props.ShowAlert('Text is Cleared', 'success');
    };
    function CopyingToClipBoard(){
        navigator.clipboard.writeText(Text);
        props.ShowAlert('Text Copied To ClipBoard', 'success');
    }
    function RemoveExtraSpaces(){
        setText(Text.replace(/\s+/g, ' ').trim());
        props.ShowAlert('Text Spaces Has Been Removed', 'success');
    }
    return(
        <>
        <div className="my-3 container">
            <h1 className={`text-${props.AllTextColor}`}>Enter the text to analyze below</h1>
            <textarea className="form-control" value={Text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button type="button" onClick={ConvertToUpperCase} className={`btn my-3 btn-${props.buttonColor}`}>Convert to UpperCase</button>
        <button type="button" onClick={ConvertToLowerCase} className={`btn my-3 mx-2 btn-${props.buttonColor}`}>Convert to LowerCase</button>
        <button type="button" onClick={ClearingText} className={`btn my-3 btn-${props.buttonColor}`}>Clear Text</button>
        <button type="button" onClick={CopyingToClipBoard} className={`btn my-3 mx-2 btn-${props.buttonColor}`}>Copy Text</button>
        <button type="button" onClick={RemoveExtraSpaces} className={`btn my-3 btn-${props.buttonColor}`}>Remove Extra Spaces</button>
        <h2 className={`text-${props.AllTextColor}`}>Your text summary</h2>
        <p className={`text-${props.AllTextColor}`}>{Text.split(" ").filter((Text) => Text!== '').length} words and {Text.split('').length} characters</p>
        <p className={`text-${props.AllTextColor}`}>{(Text.split(" ").filter((Text) => Text!== '').length)/125} Minutes read</p>
        <h2 className={`text-${props.AllTextColor}`} >Preview</h2>
        <p className={`text-${props.AllTextColor}`}>{Text || "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
};