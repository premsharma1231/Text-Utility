import React, { useState } from "react";
import axios from "axios";
import "../App.css"


export default function TextForm(props) {
    const [Text, setText] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [grammarErrors, setGrammarErrors] = useState([]);


    function HandleOnChange(event) {
        setText(event.target.value);
    }

    function IncreaseFontSize() {
        setFontSize(prevSize => {
            const newSize = prevSize + 2;
            props.ShowAlert(`Font size increased to ${newSize}`, 'success');
            return newSize;
        });    
    }

    async function checkGrammar() {
        try {
            const response = await axios.post(
                "https://api.languagetool.org/v2/check",
                new URLSearchParams({
                    text: Text,
                    language: "en-US"
                })
            );
            
            setGrammarErrors(response.data.matches);
            props.ShowAlert("Grammar and spelling check completed", "success");
        } catch (error) {
            console.error("Error checking grammar:", error);
            props.ShowAlert("Failed to check grammar", "warning");
        }
    }
    function displayErrors() {
        if (grammarErrors.length === 0) return <p>No grammar issues detected.</p>;
        return (
            <ul>
                {grammarErrors.map((error, index) => (
                    <li key={index}>
                        <b>{error.message}</b> - Suggested: {error.replacements.map(r => r.value).join(", ")}
                    </li>
                ))}
            </ul>
        );
    }


    function DecreaseFontSize() {
        setFontSize(prevSize => {
            const newSize = Math.max(prevSize - 2, 10);
            props.ShowAlert(`Font size decreased to ${newSize}`, 'success');
            return newSize;
        });
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
            props.ShowAlert('Converted to Title Case', 'success');
            setText(Text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        }
    }
    function ConverttoSentenceCase() {
        if (Text === '') {
            props.ShowAlert('Write Something In the Text-Area To Convert In TitleCase', 'warning');
        } else {
            props.ShowAlert('Converted to Sentence Case', 'success');
            setText(Text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()));
        }
    }
    async function paraphraseText() {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    model: "text-davinci-003",
                    prompt: `Paraphrase the following text: "${Text}"`,
                    temperature: 0.7,
                    max_tokens: 200,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer YOUR_API_KEY`
                    }
                }
            );
            const paraphrasedText = response.data.choices[0].text.trim();
            setText(paraphrasedText);
            props.ShowAlert("Text has been paraphrased", "success");
        } catch (error) {
            console.error("Error paraphrasing text:", error);
            props.ShowAlert("Failed to paraphrase text", "warning");
        }
    }

    

    return (
        <>
            <div style={{marginTop:'35px'}} className="container" id="ControlingNavbarDisplay">
                <h1 className={`text-${props.AllTextColor}`}>Enter the text to analyze below</h1>
                <textarea className="form-control w-90 my-2 relative" value={Text} onChange={HandleOnChange} style={{ fontSize: `${fontSize}px`, height: '190px' }} id="exampleFormControlTextarea1"></textarea>
                <button type="button" onClick={paraphraseText} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Paraphrase Text</button>
                <button type="button" onClick={checkGrammar} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Check Grammar</button>
                <button type="button" onClick={IncreaseFontSize} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Increase FontSize</button>
                <button type="button" onClick={DecreaseFontSize} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Decrease FontSize</button>
                <button type="button" onClick={ConvertToUpperCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To UpperCase</button>
                <button type="button" onClick={ConvertToLowerCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To LowerCase</button>
                <button type="button" onClick={ConverttoTitleCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To TitleCase</button>
                <button type="button" onClick={ConverttoSentenceCase} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Convert To SentenceCase</button>
                <button type="button" onClick={ClearingText} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Clear Text</button>
                <button type="button" onClick={CopyingToClipBoard} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Copy Text</button>
                <button type="button" onClick={PastingFromClipBoard} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Paste Text</button>
                <button type="button" onClick={RemoveExtraSpaces} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Remove Extra Spaces</button>
                <button type="button" onClick={LetComputerSpeak} className={`btn BasBbutton mx-1 my-1 btn-${props.buttonColor}`}>Listen</button>

                <h2 className={`text-${props.AllTextColor}`}>Grammar and Spelling Issues</h2>{displayErrors()}
                <h2 className={`text-${props.AllTextColor}`}>Your text summary</h2>
                <p className={`text-${props.AllTextColor}`}><b>{Text.split(" ").filter((Text) => Text !== '').length}</b> words, <b>{Text.length}</b> characters,<b> {Text.replace(/\n/g, '.').split('.').filter((value) => value !== '').length}</b> statements, <b> {Text.split('?').length - 1}</b> questions & {' '}<b>{Text.split('!').length - 1}</b> exclamations.</p>
                <p className={`text-${props.AllTextColor}`}>{(Text.split(" ").filter((Text) => Text !== '').length) / 125} Minutes read</p>
                <h2 className={`text-${props.AllTextColor}`}>Preview</h2>
                <p className={`text-${props.AllTextColor} w-10/12`}>{Text || "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}