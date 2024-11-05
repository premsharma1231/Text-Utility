import React from "react";
import "../App.css"



function About(){
    return(
      <div className="mx-12 my-12" id="MainAboutDiv">
        <h1>About</h1>
        <div className="accordion MainClassAboutDiv" id="accordionExample">
  <div className="accordion-item MainClassAboutDiv">
    <h2 className= {`accordion-header MainClassAboutDiv`}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne MainClassAboutDiv">
      About TextUtils
      </button>
    </h2>
    <div id="collapseOne" className="dark accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body MainClassAboutDiv">
        <strong>This is the first item's accordion body.</strong> TextUtils is a utility which can make your day to day life easy, by manipulating your text in the way you want
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item MainClassAboutDiv">
    <h2 className="accordion-header MainClassAboutDiv">
      <button className="accordion-button collapsed MainClassAboutDiv" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse MainClassAboutDiv" data-bs-parent="#accordionExample">
      <div className="accordion-body MainClassAboutDiv">
      <ul>
                <li className="my-2">
                  Change lowercase text to uppercase.
                </li >
                <li>
                  Change uppercase text to lowercase.
                </li>
                <li className="my-2">
                  Remove Extra Space.
                </li>
                <li>
                  Copy text to clipboard.
                </li>
                <li className="my-2">
                  Encode or decode text into Base64.
                </li>
                <li>
                  Reading text is old fashion? Listen your content.
                </li>
                <li className="my-2">
                  Last but not the least, get count of words and characters of your text.
                </li>
              </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item MainClassAboutDiv">
    <h2 className="accordion-header MainClassAboutDiv">
      <button className="accordion-button collapsed MainClassAboutDiv" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse MainClassAboutDiv" data-bs-parent="#accordionExample">
      <div className="accordion-body MainClassAboutDiv">
        <strong>This Text Utility software works in any web browsers such as <code>Chrome, Firefox, Internet Explorer, Safari, Opera</code>. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
      </div>
    </div>
  </div>
</div>
</div>
    )
}


export default About;