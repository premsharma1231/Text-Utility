import React from "react";



function Alert(props){
    return(
        props.showAlert && <div class={`alert alert-${props.showAlert.type}`} role="alert"><strong>Success</strong> : {props.showAlert.msg}</div>
    )
}



export default Alert;