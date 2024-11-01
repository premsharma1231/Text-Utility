import React, { useState } from "react";
import "../App.css"


export default function TextForm(props) {
    const [Text, setText] = useState('');
    const [fontSize, setFontSize] = useState(16);

    function HandleOnChange(event) {
        setText(event.target.value);
    }

    function IncreaseFontSize() {
        setFontSize(prevSize => prevSize + 2); // Increase font size by 2 pixels
        props.ShowAlert('Font size increased!', 'success');
    }

    function DecreaseFontSize() {
        setFontSize(prevSize => Math.max(prevSize - 2, 10)); // Decrease font size by 2 pixels, minimum 10 pixels
        props.ShowAlert('Font size decreased!', 'success');
    }


    function ConvertToUpperCase() {
        if (Text === '' || Text === ' ') {
            props.ShowAlert('Write Something In Text Area to Use Functions', 'warning');
        } else {
            setText(Text.toUpperCase());
            props.ShowAlert('Converted To UpperCase', 'success');
        }
    }

    function ConvertToLowerCase() {
        if (Text === '' || Text === ' ') {
            props.ShowAlert('Write Something In Text Area Use Functions', 'warning');
        } else {
            setText(Text.toLowerCase());
            props.ShowAlert('Converted To LowerCase', 'success');
        }
    }

    function ClearingText() {
        if (Text === '' || Text === ' ') {
            props.ShowAlert('Already Cleaned', 'warning');
        } else {
            setText('');
            props.ShowAlert('Text is Cleared', 'success');
        }
    }

    function CopyingToClipBoard() {
        if (Text === '' || Text === ' ') {
            props.ShowAlert('There Is Nothing To Copy Yet!!', 'warning');
        } else {
            navigator.clipboard.writeText(Text);
            props.ShowAlert('Text Copied To ClipBoard', 'success');
        }
    }

    async function PastingFromClipBoard() {
        try {
            const text = await navigator.clipboard.readText();
            setText(text);
            props.ShowAlert('Text Pasted From ClipBoard', 'success');
        } catch (error) {
            console.error('Failed to read clipboard contents: ', error); // Error handling
            props.ShowAlert('Failed to paste text from clipboard', 'warning'); // Alert dikhana agar error aaye
        }
    }

    function RemoveExtraSpaces() {
        if (Text === '' || Text === ' ') {
            props.ShowAlert('Hahaa, Text-Area Is Blank!!', 'warning');
        } else {
            setText(Text.replace(/\s+/g, ' ').trim());
            props.ShowAlert('Text Spaces Has Been Removed', 'success');
        }
    }

    function LetComputerSpeak(event) {
        let el = event.currentTarget;
        if (el.innerHTML === 'Listen') el.innerHTML = 'Stop Now';
        else el.innerHTML = 'Listen';
    
        if (el.innerHTML === 'Stop Now') {
            let speech = new SpeechSynthesisUtterance();
            speech.text = document.querySelector('textarea').value;
            window.speechSynthesis.speak(speech);
            speech.onend = () => {
                el.innerHTML = 'Listen';
            };
        } else {
            let speech = new SpeechSynthesisUtterance();
            speech.text = document.querySelector('textarea').value;
            window.speechSynthesis.cancel(speech);
        }
    }

    function ConverttoTitleCase() {
        if (Text === '') {
            props.ShowAlert('Write Something In the Text-Area To Convert In TitleCase', 'warning');
        } else {
            props.ShowAlert('Converted to Title Case', 'Success');
            setText(Text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        }
    }
    function ConverttoSentenceCase() {
        if (Text === '') {
            props.ShowAlert('Write Something In the Text-Area To Convert In TitleCase', 'warning');
        } else {
            props.ShowAlert('Converted to Sentence Case', 'Success');
            setText(Text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()));
        }
    }
    
    

    return (
        <>
            <div style={{marginTop:'35px'}} className="container" id="ControlingNavbarDisplay">
                <h1 className={`text-${props.AllTextColor}`}>Enter the text to analyze below</h1>
                <textarea className="form-control my-2" value={Text} onChange={HandleOnChange} style={{ fontSize: `${fontSize}px` }} id="exampleFormControlTextarea1" rows="8"></textarea>
                
                <button type="button" onClick={ConvertToUpperCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To UpperCase</button>
                <button type="button" onClick={ConvertToLowerCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To LowerCase</button>
                <button type="button" onClick={ConverttoTitleCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To TitleCase</button>
                <button type="button" onClick={ConverttoSentenceCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To SentenceCase</button>
                <button type="button" onClick={ClearingText} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Clear Text</button>
                <button type="button" onClick={CopyingToClipBoard} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Copy Text</button>
                <button type="button" onClick={PastingFromClipBoard} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Paste Text</button>
                <button type="button" onClick={RemoveExtraSpaces} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Remove Extra Spaces</button>
                <button type="button" onClick={LetComputerSpeak} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Listen</button>
                <button type="button" onClick={IncreaseFontSize} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Increase FontSize</button>
                <button type="button" onClick={DecreaseFontSize} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Decrease FontSize</button>
                
                <h2 className={`text-${props.AllTextColor}`}>Your text summary</h2>
                <p className={`text-${props.AllTextColor}`}><b>{Text.split(" ").filter((Text) => Text !== '').length}</b> words, <b>{Text.length}</b> characters,<b> {Text.replace(/\n/g, '.').split('.').filter((value) => value !== '').length}</b> statements, <b> {Text.split('?').length - 1}</b> questions & {' '}<b>{Text.split('!').length - 1}</b> exclamations.</p>
                <p className={`text-${props.AllTextColor}`}>{(Text.split(" ").filter((Text) => Text !== '').length) / 125} Minutes read</p>
                <h2 className={`text-${props.AllTextColor}`}>Preview</h2>
                <p className={`text-${props.AllTextColor} w-10/12`}>{Text || "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}