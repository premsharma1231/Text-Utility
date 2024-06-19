import React from "react";
import { useState } from "react";


export default function TextForm(props){
    const [Text, setText] = useState(String);
    function HandleOnChange(event){
        setText(event.target.value);
    };
    function ConvertToUpperCase(){
        if(Text==='' || Text===' '){
            props.ShowAlert('Write Something In Text Area Use Functions', 'danger');
        } else{
            setText(Text.toUpperCase());
            props.ShowAlert('Converted To UpperCase', 'success');
        }
    };
    function ConvertToLowerCase(){
        if(Text==='' || Text===' '){
            props.ShowAlert('Write Something In Text Area Use Functions', 'danger');
        } else{
            setText(Text.toLowerCase());
            props.ShowAlert('Converted To LowerCase', 'success');
            }
    };
    function ClearingText(){
        if(Text==='' || Text===' '){
            props.ShowAlert('Already Cleaned', 'danger');
        } else{
            setText('');
            props.ShowAlert('Text is Cleared', 'success');
        }
    };
    function CopyingToClipBoard(){
        if(Text==='' || Text===' '){
            props.ShowAlert('There Is Nothing To Copy Yet!!', 'danger');
        } else{
            navigator.clipboard.writeText(Text);
            props.ShowAlert('Text Copied To ClipBoard', 'success');
        }
    }
    function RemoveExtraSpaces(){
        if(Text==='' || Text===' '){
            props.ShowAlert('Hahaa, Text-Area Is Blank!!', 'danger');
        } else{
            setText(Text.replace(/\s+/g, ' ').trim());
            props.ShowAlert('Text Spaces Has Been Removed', 'success');
        }
    }
    function LetComputerSpeak(){
        if(Text ===''){
            props.ShowAlert('Write Something In the Text-Area To Listen', 'success');
        }   else{
            let speech = new SpeechSynthesisUtterance();
            speech.text = document.querySelector('textarea').value;
            window.speechSynthesis.speak(speech);
        }
    }
    return(
        <>
        <div className="my-3 container" id="ControlingNavbarDisplay">
            <h1 className={`text-${props.AllTextColor}`}>Enter the text to analyze below</h1>
            <textarea className="form-control" value={Text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button type="button" onClick={ConvertToUpperCase} className={`btn my-3 btn-${props.buttonColor}`}>Convert to UpperCase</button>
        <button type="button" onClick={ConvertToLowerCase} className={`btn my-3 mx-2 btn-${props.buttonColor}`}>Convert to LowerCase</button>
        <button type="button" onClick={ClearingText} className={`btn my-3 btn-${props.buttonColor}`}>Clear Text</button>
        <button type="button" onClick={CopyingToClipBoard} className={`btn my-3 mx-2 btn-${props.buttonColor}`}>Copy Text</button>
        <button type="button" onClick={RemoveExtraSpaces} className={`btn my-3 btn-${props.buttonColor}`}>Remove Extra Spaces</button>
        <button type="button" onClick={LetComputerSpeak} className={`btn my-3 mx-2 btn-${props.buttonColor}`}>Listen</button>
        <h2 className={`text-${props.AllTextColor}`}>Your text summary</h2>
        <p className={`text-${props.AllTextColor}`}>{Text.split(" ").filter((Text) => Text!== '').length} words and {Text.split('').length} characters</p>
        <p className={`text-${props.AllTextColor}`}>{(Text.split(" ").filter((Text) => Text!== '').length)/125} Minutes read</p>
        <h2 className={`text-${props.AllTextColor}`} >Preview</h2>
        <p className={`text-${props.AllTextColor}`}>{Text || "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
};