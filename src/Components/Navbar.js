import React from "react";

export default function Navbar(props){
        // function badakrnaHai(hoverEffectForBlack){
        //   document.getElementById('hoverEffectForBlack').style.height = '32px';
        //   document.getElementById('hoverEffectForBlack').style.width = '32px';
        // };
        // function vapisChota(hoverEffectForBlack){
        //   document.getElementById('hoverEffectForBlack').style.height = '30px';
        //   document.getElementById('hoverEffectForBlack').style.width = '30px';
        // };
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
     <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={props.ClickEventForNavbAr}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={props.ClickEventForAbout}>About</a>
        </li>
      </ul>
      <div class="form-check form-switch">
        <input onClick={props.ToggleMode} className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" id="DarkModeTextItis" for="flexSwitchCheckDefault">Enable Darkmode</label>
      </div>
      {/* <div class="form-check form-switch" >
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class={`form-check-label text-${props.AllTextColor}`} for="flexSwitchCheckDefault">Enable DarkMode</label>
      </div> */}
    </div>
  </div>
</nav>
)
}