import React from "react";

function capitalizeFirstLetter(string) {
    if (!string) return ''; // Agar string empty hai toh return empty string
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function Alert(props){
    return(
        props.showAlert && <div style={{position:'sticky', top: '56px', left: '0px', width:'100%', height: '30px',lineHeight:'0px',textAlign:'center'}} className={`alert alert-${props.showAlert.type}`} role="alert"><strong>{capitalizeFirstLetter(props.showAlert.type)}</strong> : {props.showAlert.msg}</div>
    )
}



export default Alert;